let foot ='<div class="footer">' +
'<div class="footerlbox">' +
  '<div class="footertitlelist">' +
    '<span><a href="./design.html">设计领域</a></span>' +
    '<span><a href="./serve.html">服务范畴</a></span>' +
    '<span><a href="./company.html">关于雅鸟</a></span>' +
    '<span><a href="./news.html">新闻中心</a></span>' +
    '<span><a href="./design.html">联系我们</a></span>' +
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

//获取基本信息
let nowtime = Date.parse(new Date());
let token = nowtime + 'hopynrztoken';
let timeStamp = nowtime;
token = md5(token).toUpperCase();
console.log(token);
console.log(nowtime);
// document.cookie ='token=' + hash;
// document.cookie ='timeStamp='+ nowtime;
document.cookie = "name=Jonh";
document.cookie = "age=12";
document.cookie = "class=111";
// $.cookie('the_cookie', 'the_value');  
// $.cookie('the_cookie');  
console.log(document.cookie);
// $.ajax({
//   dataType: 'json',
//   type: 'GET',
//   url: 'http://118.24.159.161:8082/pc/siteInfo',
//   // beforeSend: function (xhr) {
//   //   xhr.setRequestHeader("token", hash);
//   //   xhr.setRequestHeader("timeStamp", nowtime);
//   // },
//   headers:{
//     token: token,
//     timeStamp: nowtime
//   },
//   xhrFields: {
//     withCredentials: true
//   },
//   success: function(e) {
//     console.log(e);
//   },
//   error: function(e) {
//     console.log(e);
//   }
// })