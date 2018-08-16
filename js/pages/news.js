let result = '';
let typeid = 0;
window.onload = () => {
    // 加载文章类别
    let loadArticleType = () => {
        $.ajax({
            url: baseUrl + '/articleType/getArticleTypeByParentId/1',
            success: function (res) {
                let newstitlelist = document.getElementsByClassName('themelist')[0];
                let html = '';
                result = res.result;
                for (let i = 0; i < res.result.length; i++) {
                    let clo = '#000000';
                    if (i == 0) {
                        clo = '#94002C';
                        sessionStorage.setItem('type', res.result[0].name);
                        typeid = res.result[0].id;
                        // 首次加载新闻
                        ajax(baseUrl + '/articlePush/getArticleList?article_type=' + res.result[0].id, 'loadnews', 1, 4);
                    }
                    html += '<span class="titleList" onclick="changTitle(this,' + i + ');" style="color: ' + clo + '">' + res.result[i].name + '</span>';
                }
                newstitlelist.innerHTML = html;
            },
            error: function (res) {
                console.log(res);
            }
        });
    };
    loadArticleType(); // 加载新闻类别

    // var pageNum = 1;
    $.jqPaginator('#pagination', {
        totalPages: 100,
        visiblePages: 5,
        currentPage: 1,
        prev: '<li class="prev"><a href="javascript:;">上一页</a></li>',
        next: '<li class="next"><a href="javascript:;">下一页</a></li>',
        page: '<li class="page"><a href="javascript:;">{{page}}</a></li>',
        onPageChange: function (page,type) {
            // pageNum = page;
            ajax(baseUrl + '/articlePush/getArticleList?article_type=' + typeid, 'loadnews', page, 4);
        }
    });
};

// 点击新闻类别事件
function changTitle(obj, index) {
    let titleList = document.getElementsByClassName('titleList');
    // 变换颜色
    for (let i = 0; i < titleList.length; i++) {
        titleList[i].style.color = '#000000';
    }
    let plate = document.getElementsByClassName('plate')[0];
    let typeName = document.getElementsByClassName('typeName')[0];
    plate.innerHTML = result[index].name;
    typeName.innerHTML = result[index].name;

    sessionStorage.setItem('type', result[index].name);
    typeid = result[index].id;
    obj.style.color = '#94002C';
    // 改变新闻内容
    ajax(baseUrl + '/articlePush/getArticleList?article_type=' + result[index].id, 'loadnews', 1, 4)
}

