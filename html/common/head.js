(function() {
  let cssArr = document.getElementsByTagName('script');
  headTitle = cssArr[0].getAttribute('data-title');
  let head ='<div class="header">' +
  '<div class="login">' +
    '<img src="./../images/logo.png" alt="">' +
    '<span id="websiteName">雅鸟设计</span>' +
  '</div>' +
  '<div class="title_list">' +
    '<ul>' +
      '<li>设计领域</li>' +
      '<li>服务范畴</li>' +
      '<li>关于雅鸟</li>' +
      '<li>新闻中心</li>' +
      '<li>联系我们</li>' +
    '</ul>' +
  '</div>' +
  '</div>';

  let headStyle = '<link rel="stylesheet" href="./../css/lib/bootstrap.min.css">' +
  '<link rel="stylesheet" href="./../css/module/header.css">' +
  '<link rel="stylesheet" href="./../css/module/footer.css">' +
  '<link rel="stylesheet" href="./../css/pages/' + headTitle + '.css">' +
  '<script src="./../js/lib/jquery-3.1.1.min.js"></script>' +
  '<script src="./../js/lib/bootstrap.min.js"></script>' +
  '<script src="./../js/pages/' + headTitle + '.js"></script>';
  document.write(headStyle);
  document.write(head);
  if (headTitle != 'index') {
    let themetitle = cssArr[0].getAttribute('data-theme');
    let themet =   '<div class="plate">' +
    themetitle +
  '</div>';
  document.write(themet);
  }
})()