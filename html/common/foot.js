let foot = '<div class="footer">' +
    '<div class="footerlbox">' +
    '<div class="footertitlelist">' +
/*    '<span><a href="./design.html">设计领域</a></span>' +
    '<span><a href="./serve.html">服务范畴</a></span>' +
    '<span><a href="./company.html">关于雅鸟</a></span>' +
    '<span><a href="./news.html">新闻中心</a></span>' +
    '<span><a href="./design.html">联系我们</a></span>' +*/
    '</div>' +
    '<div class="footerbq">@2018 重庆雅鸟设计软装公司 版权所有，并保留所有权利。IPC备案证书号：粤ICP备0122516号</div>' +
    '</div>' +
    '<div class="footerrbox">' +
    '<div class="gzh">' +
    '<img class="footergzhimg" src="./../images/code.png">' +
    '<div class="footerconcer">关注公众号</div>' +
    '</div>' +
    '<div class="footeraddr">地址：重庆市九龙坡区歇台子</div>' +
    '</div>' +
    '</div>';
document.write(foot);
// let to_index = document.getElementsByClassName('login')[0];
// to_index.onclick = () => {
//   window.location.href = './index.html';
// }
// let titleparent = document.getElementsByClassName('conadd')[0];
// let titlebox = document.getElementsByClassName('ttitlebox')[0];
// titleparent.onmouseover = () => {
//   titlebox.style.visibility="visible";
// }
// titleparent.onmouseout = () => {
//   titlebox.style.visibility="hidden";
// }

// 设置常数
const baseUrl = 'http://118.24.159.161:8082/pc';
//const baseUrl = 'http://localhost:8082/pc';
// const baseUrl = 'http://www.yaniaozg.com:8092/pc';
//站点信息初始化
var siteInfo = {
    address:"重庆市九龙坡区石桥铺",
    copyright:"© 2018-2019 黑鸥菩科技",
    description:"雅鸟软装官方网站",
    icon:"http://dzrenai.oss-cn-beijing.aliyuncs.com/img/2018/7/5da80089-9f98-4f1a-8590-8fd971565c5d.png",
    icp:"蜀ICP备17044073号",
    keywords:"雅鸟,软装,雅鸟软装",
    name:"雅鸟软装",
    networksecurity:"蜀公网安备11010802*****",
    tel:"0818-6322222",
    url:"http://www.yaniaozg.com",
};

lessThanLocationHref(750,"http://mobile.yaniaozg.com/");

// 获取基本信息
let timeStamp = Date.parse(new Date());
let token = timeStamp + 'hopynrztoken';
token = md5(token).toUpperCase();

// 设置接口token
$(document).ajaxSend(function (event, xhr) {
    xhr.setRequestHeader("token", token);
    xhr.setRequestHeader("timeStamp", timeStamp);
});

//加载网站基本信息
let loadSiteInfo = (res) => {
    let footergzhimg = document.getElementsByClassName('footergzhimg')[0];
    let footeraddr = document.getElementsByClassName('footeraddr')[0];
    let footerbq = document.getElementsByClassName('footerbq')[0];
    let footertitlelist = document.getElementsByClassName('footertitlelist')[0];
    let logo = document.getElementById('logo');
    let pcHeaderList = document.getElementById('pcHeader');

    siteInfo = res.siteInfo;
    // 修改头部
    $("title[name='title']").text(siteInfo.name);//修改title值
    $("meta[name='keywords']").attr("content",siteInfo.keywords);//修改keywords值
    $("meta[name='description']").attr("content",siteInfo.description);//修改keywords值
    $("link[name='ico']").attr("href",siteInfo.icon);//修改icon
    // 设置基本信息
    logo.src = res.headLogo.show_url;
    logo.onclick = () => {
        window.location.href = res.headLogo.herf_url;
    };
    footergzhimg.src = res.code.show_url;
    footerbq.innerHTML = res.siteInfo.copyright + '&nbsp;&nbsp;&nbsp;IPC备案证书号：' + res.siteInfo.icp;
    footeraddr.innerHTML = '地址：' + res.siteInfo.address;
    // 顶部菜单
    let lis = '';
    for (let i = 0; i < res.pcHeader.length; i++) {
        if (res.pcHeader[i].childColumns == null) {
            lis += '<li class="nav-item">' +
                '<a class="nav-link" href="' + res.pcHeader[i].herfUrl + '" >'+res.pcHeader[i].columnName+'</a>' +
                '</li>';
        } else {
            let child = '';
            for (let j = 0; j < res.pcHeader[i].childColumns.length; j++) {
                child += '<a class="dropdown-item" href="'+res.pcHeader[i].childColumns[j].herfUrl+'">'+res.pcHeader[i].childColumns[j].columnName+'</a>';
            }
            lis += '<li class="nav-item dropdown">' +
                '<a class="nav-link dropdown-toggle" href="' + res.pcHeader[i].herfUrl + '" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
                res.pcHeader[i].columnName+
                '</a>' +
                '<div class="dropdown-menu" aria-labelledby="navbarDropdown">' +
                child +
                '</li>';
        }
    }
    pcHeaderList.innerHTML = lis;
    // 底部菜单
    let html = '';
    for (let i = 0; i < res.pcFooter.length; i++) {
        html += '<span><a href="' + res.pcFooter[i].herfUrl + '">' + res.pcFooter[i].columnName + '</a></span>';
    }
    footertitlelist.innerHTML = html;
    // 得到关于我们
    if (pageName != null && pageName == 'contactaddr') {
        let add_ = document.getElementsByClassName('add_')[0];
        let phone_ = document.getElementsByClassName('phone_')[0];
        let email_ = document.getElementsByClassName('email_')[0];
        let tell_ = document.getElementsByClassName('tell_')[0];
        add_.innerHTML = res.siteInfo.address;
        phone_.innerHTML = res.siteInfo.tel;
        email_.innerHTML = res.siteInfo.email;
        tell_.innerHTML = res.siteInfo.facsimile;
    }
};

$(function () {
    $("#header").fadeIn(800);
});

ajax(baseUrl + '/siteInfo', 'loadSiteInfo');