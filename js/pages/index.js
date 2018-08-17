let result = '';
window.onload = () => {
    // 首页banner
    $.ajax({
        url: baseUrl + '/banner/getBannersByType/1',
        success: function (res) {
            let banner = document.getElementsByClassName('carousel-inner')[0];
            let html = '';
            for (let i = 0; i < res.result.length; i++) {
                let act = '';
                if (i == 0) act = 'active';
                html += '<div onclick="gotoUrl('+res.result[i].herf_url+');" class="carousel-item ' + act + '">\n' +
                    '        <img onerror="imgNotfind(event);" class="d-block w-100" src="' + res.result[i].show_url + '" alt="Third slide">\n' +
                    '      </div>';
            }
            banner.innerHTML = html;
        },
        error: function (res) {
            console.log(res);
        }
    });
    // 加载文章类别
    let loadArticleType = () => {
        $.ajax({
            url: baseUrl + '/articleType/getArticleTypeByParentId/1',
            success: function (res) {
                let newstitlelist = document.getElementsByClassName('newstitlelist')[0];
                let html = '';
                result = res.result;
                for (let i = 0; i < res.result.length; i++) {
                    let clo = '#000000';
                    if (i == 0) {
                        clo = '#94002C';
                        sessionStorage.setItem('type', res.result[0].name);
                        // 首次加载新闻
                        ajax(baseUrl + '/articlePush/getArticleList?article_type=' + res.result[0].id, 'indexnews', 1, 4);
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

    //装修类别
    let eletype = () => {
        ajax(baseUrl + '/floorDistribution/getFloorDistributionListByParentId?parentId=' + 1, 'indexdes');
    };
    eletype();// 装修类别事件

};

// 点击新闻类别事件
function changTitle(obj, index) {
    let titleList = document.getElementsByClassName('titleList');
    // 变换颜色
    for (let i = 0; i < titleList.length; i++) {
        titleList[i].style.color = '#000000';
    }
    sessionStorage.setItem('type', result[index].name);
    obj.style.color = '#94002C';
    // 改变新闻内容
    ajax(baseUrl + '/articlePush/getArticleList?article_type=' + result[index].id, 'indexnews', 1, 4)
}

// banner跳转事件
function gotoUrl(url) {
    window.location.href = url;
}