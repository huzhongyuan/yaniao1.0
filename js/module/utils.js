//处理url参数
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return (false);
}

//首页新闻加载
let newsload = (res) => {
    let newsInfo = document.getElementsByClassName('newsInfo');
    let newstitle = document.getElementsByClassName('newstitle');
    let newscontent = document.getElementsByClassName('newscontent');
    let newstime = document.getElementsByClassName('newstime');
    for (let i in res.result) {
        newstitle[i].innerHTML = res.result[i].title;
        newscontent[i].innerHTML = res.result[i].digest;
        newstime[i].innerHTML = formatDateTime(res.result[i].gmt_modified);
        newsInfo[i].onclick = () => {
            window.location.href = './newsInfo.html?id=' + res.result[i].id;
        }
    }
    // 结果为空清空新闻列表
    if (res.result==null||res.result.length==0) {
        for (let i=0; i<4; i++) {
            newstitle[i].innerHTML = '';
            newscontent[i].innerHTML = '';
            newstime[i].innerHTML = '';
        }
    }
};

//首页装修类别
let indexdes = (res) => {
    let theme = document.getElementsByClassName('theme')[0];
    new Promise((resolve, reject) => {
        console.log(res);
        for (let i in res.result) {
            let themeimg = document.createElement('div');
            themeimg.className = 'themeimg';
            themeimg.innerHTML =
                '<img src="' + res.result[i].show_url + '" alt="">' +
                '<div class="themeInfo">' +
                '<div class="themetitle">' + res.result[i].ch_name + '</div>' +
                '<div class="themename">' + res.result[i].en_name + '</div>' +
                '</div>';
            theme.appendChild(themeimg);
            resolve(1);
        }

    }).then(r => {
        let themeimg = document.getElementsByClassName('themeimg');
        let themeimglength = themeimg.length;
        let themetitle = document.getElementsByClassName('themetitle');
        let themename = document.getElementsByClassName('themename');
        for (let i in themeimg) {
            //鼠标移入装修类别
            themeimg[i].onmouseover = () => {
                for (let j = 0; j < themeimglength; j++) {
                    themeimg[j].style.opacity = '1';
                }
                themeimg[i].style.opacity = '0.5';
            }
            //鼠标点击装修类别
            themeimg[i].onclick = () => {
                console.log(res.result[i].id);
                sessionStorage.setItem('name', res.result[i].ch_name);
                window.location.href = './designInfo.html?id=' + res.result[i].id;
            }
        }
    })
}

//设计领域图片数据加载
let designTitle = (id, url) => {
    $.ajax({
        data: id,
        url: url || 'http://rapapi.org/mockjsdata/35927/shejilingyubiaotineirong',
        success: function (res) {
            let photolist = document.getElementsByClassName('photolist')[0];
            for (let i in res.result) {
                let dv = document.createElement('div');
                dv.className = 'photolistInfo';
                dv.innerHTML = '<img src="' + res.result[i].show_url + '" alt="">' +
                    '<div class="photoInfo">' +
                    '<div class="photoInfoname">' + res.result[i].name + '</div>' +
                    '</div>';
                photolist.appendChild(dv);
            }
            let photolistInfo = document.getElementsByClassName('photolistInfo');
            for (let i in res.result) {
                photolistInfo[i].onclick = () => {
                    window.location.href = './designInfo_child.html?id=' + res.result[i].id;
                }
            }
        }
    })
}
//设计领域首页
let designIndex = (res) => {
    //标题加载
    new Promise(() => {
        let themelist = document.getElementsByClassName('themelist')[0];
        for (let i in res.result) {
            let themelisttitle = document.createElement('span');
            themelisttitle.className = 'themelisttitle';
            themelisttitle.innerHTML = res.result[i].name;
            themelist.appendChild(themelisttitle);
        }
        ;
        designTitle(res.result[0].id); //首次加载渲染数据
        let themelisttitle = document.getElementsByClassName('themelisttitle');
        for (let i in res.result) {
            //点击选项卡渲染数据
            themelisttitle[i].onclick = () => {
                sessionStorage.setItem('name', res.result[i].name);
                window.location.href = './designInfo.html?id=' + res.result[i].id;
            }
        }
    })
}

//新闻中心
let loadnews = (res) => {
    let newscontent = document.getElementsByClassName('newscontent')[0];
    newscontent.innerHTML = '';
    for (let i in res.result) {
        let newslist = document.createElement('div');
        newslist.className = 'newslist';
        newslist.innerHTML = '<img src="' + res.result[i].show_url + '" alt="">' +
            '<div class="newslistbox">' +
            '<div class="newslisttitle">' + res.result[i].title + '</div>' +
            '<div class="newslisttime">' + +res.result[i].time + +'</div>' +
            '<div class="newslistcontent">' + res.result[i].content + '</div>' +
            '</div>';
        newscontent.appendChild(newslist);
    }
    for (let i in res.result) {
        let newslist = document.getElementsByClassName('newslist');
        newslist[i].onclick = () => {
            sessionStorage.setItem('newsname', res.result[i].title);
            window.location.href = './newsInfo.html?id=' + res.result[i].id;
        }
    }
}

let ajax = (url, des, pageNo, pageSize) => {
    $.ajax({
        url: url,
        data: {
            pageNo: pageNo,
            pageSize: pageSize
        },
        success: function (res) {
            if (des == 'indexnews') {
                newsload(res);    //首页新闻加载
            } else if (des == 'indexdes') {
                indexdes(res);  //首页装修类别
            } else if (des == 'design') {
                designIndex(res); //设计领域首页
            } else if (des == 'news') {
                loadnews(res);
            } else if (des == 'loadSiteInfo') {
                loadSiteInfo(res);
            }
        },
        error: function (res) {
            console.log(res);
        }
    })
    // console.log(url)
}
