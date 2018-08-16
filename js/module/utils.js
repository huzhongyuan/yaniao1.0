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
    if (res.result == null || res.result.length == 0) {
        for (let i = 0; i < 4; i++) {
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
                '<img src="' + res.result[i].show_url + '" alt="" onerror="imgNotfind(event);">' +
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
};

//设计领域图片数据加载
let designTitle = (id, url) => {
    $.ajax({
        // data: id,
        url: url || baseUrl + '/product/getProductListByParentFloor?floorId=' + id,
        success: function (res) {
            let photolist = document.getElementsByClassName('photolist')[0];
            for (let i in res.result) {
                let dv = document.createElement('div');
                dv.className = 'photolistInfo col-sm-3';
                dv.innerHTML = '<img src="' + res.result[i].show_url + '" alt="" onerror="imgNotfind(event);">' +
                    '<div class="photoInfo" style="display: none">' +
                    '<div class="photoInfoname">' + res.result[i].ch_name + '</div>' +
                    '</div>';
                photolist.appendChild(dv);
            }
            let photolistInfo = document.getElementsByClassName('photolistInfo');
            for (let i in res.result) {
                // 点击跳转
                photolistInfo[i].onclick = () => {
                    sessionStorage.setItem('name', res.result[i].ch_name);
                    /*if (id==1) {
                        sessionStorage.setItem('columnName', '设计领域');
                        sessionStorage.setItem('columnUrl', 'design.html');
                    } else {
                        sessionStorage.setItem('columnName', '服务范畴');
                        sessionStorage.setItem('columnUrl', 'serve.html');
                    }*/
                    window.location.href = './designInfo_child.html?id=' + res.result[i].id;
                };
                // 鼠标效果
                photolistInfo[i].onmouseover = () => {
                    photolistInfo[i].getElementsByClassName('photoInfo')[0].style.display = 'flex';
                };
                photolistInfo[i].onmouseout = () => {
                    photolistInfo[i].getElementsByClassName('photoInfo')[0].style.display = 'none';
                };
            }
        }
    })
};
//设计领域首页
let designIndex = (res) => {
    //标题加载
    new Promise(() => {
        let themelist = document.getElementsByClassName('themelist')[0];
        for (let i in res.result) {
            let themelisttitle = document.createElement('span');
            themelisttitle.className = 'themelisttitle';
            themelisttitle.innerHTML = res.result[i].ch_name;
            themelist.appendChild(themelisttitle);
        }
        let parentId = res.result[0].parent_id;
        designTitle(parentId); //首次加载渲染数据
        let themelisttitle = document.getElementsByClassName('themelisttitle');
        for (let i in res.result) {
            //点击选项卡渲染数据
            themelisttitle[i].onclick = () => {
                sessionStorage.setItem('name', res.result[i].ch_name);
                window.location.href = './designInfo.html?id=' + res.result[i].id;
            }
        }
    })
};

//新闻中心
let loadnews = (res) => {
    let newscontent = document.getElementsByClassName('newscontent')[0];
    newscontent.innerHTML = '';
    let content = '';
    for (let i in res.result) {
        content += '<div class="newslist"><img src="' + res.result[i].show_url + '" alt="" onerror="imgNotfind(event);">' +
            '<div class="newslistbox">' +
            '<div class="newslisttitle">' + res.result[i].title + '</div>' +
            '<div class="newslisttime">' + formatDateTime(res.result[i].gmt_modified) + '</div>' +
            '<div class="newslistcontent">' + res.result[i].digest + '</div>' +
            '</div></div>';
    }
    newscontent.innerHTML = content;
    // 设置页数
    $('#pagination').jqPaginator('option', {
        totalPages: Math.ceil(res.totalCount / 4)
    });
    // 设置事件
    for (let i in res.result) {
        let newslist = document.getElementsByClassName('newslist');
        newslist[i].onclick = () => {
            sessionStorage.setItem('newsname', res.result[i].title);
            window.location.href = './newsInfo.html?id=' + res.result[i].id;
        }
    }
};

// 加载招聘信息
let loadEmp = (res) => {
    let accordionExample = document.getElementById('accordionExample');
    let html = '';
    for (let i = 0; i < res.result.length; i++) {
        html += '<div class="card">\n' +
            '      <div class="card-header" id="heading'+i+'">\n' +
            '        <h5 class="mb-0">\n' +
            '          <button class="btn btn-link collapsed upmore" type="button" data-toggle="collapse" data-target="#collapse'+i+'" aria-expanded="false" aria-controls="collapseTwo">\n' +
            '+&nbsp;&nbsp;'+res.result[i].title +
            '          </button>\n' +
            '        </h5>\n' +
            '      </div>\n' +
            '      <div id="collapse'+i+'" class="collapse" aria-labelledby="heading'+i+'" data-parent="#accordionExample">\n' +
            '        <div class="card-body">\n' +
            res.result[i].content +
            '        </div>\n' +
            '      </div>\n' +
            '    </div>';
    }
    accordionExample.innerHTML = html;
    // 设置页数
    $('#pagination').jqPaginator('option', {
        totalPages: Math.ceil(res.totalCount / 4)
    });
};

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
            } else if (des == 'loadEmp') {
                loadEmp(res);  //首页装修类别
            } else if (des == 'design') {
                designIndex(res); //设计领域首页
            } else if (des == 'news') {
                loadnews(res);
            } else if (des == 'loadSiteInfo') {
                loadSiteInfo(res);
            } else if (des == 'loadnews') {
                loadnews(res);
            }
        },
        error: function (res) {
            console.log(res);
        }
    })
    // console.log(url)
};
