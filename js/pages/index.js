window.onload = () => {
    // 首页banner
    $.ajax({
        url: baseUrl + '/banner/getBannersByType/1',
        success: function (res) {
            let banner = document.getElementsByClassName('carousel-inner')[0];
            let html = '';
            for (let i=0; i<res.result.length; i++) {
                html += '<div class="carousel-item">\n' +
                    '        <img class="d-block w-100" src="'+res.result[i].show_url+'" alt="Third slide">\n' +
                    '      </div>';
            }
            banner.innerHTML = html;
        },
        error: function (res) {
            console.log(res);
        }
    });
    //首页选项卡切换事件
    let titleList = document.getElementsByClassName('titleList');
    let url = ['http://rapapi.org/mockjsdata/35927/qiyexinwen', 'http://rapapi.org/mockjsdata/35927/hangyezixun', 'http://rapapi.org/mockjsdata/35927/zhuangxiuzhishi'];
    //首次加载界面事件
    let fristload = () => {
        ajax(url[0], 'indexnews'); //首次加载新闻
        titleList[0].style.color = '#94002C'; //首次加载新闻首个标题为红色
        newstitle();//点击新闻标题
        eletype();//装修类别事件
    }
    //点击新闻标题变色事件
    let changeColor = () => {
        for (let i = 0; i < titleList.length; i++) {
            titleList[i].style.color = '#000000';
        }
    }
    //点击新闻标题
    let newstitle = () => {
        for (let i in titleList) {
            titleList[i].onclick = () => {
                changeColor(); //点击新闻标题变色
                titleList[i].style.color = '#94002C';
                //发起请求
                ajax(url[i], 'indexnews', 4)
            }
        }
    }

    //装修类别
    let eletype = () => {
        ajax('http://rapapi.org/mockjsdata/35927/zhuangxiuleibie', 'indexdes');
    }

    //首次加载界面
    fristload();
}