(function () {
    let cssArr = document.getElementsByTagName('script');
    headTitle = cssArr[0].getAttribute('data-title');
    let head = '<div class="header" id="header" style="display: none">' +
        '<div><img src="" id="logo" alt=""></div>' +
        '<nav class="na navbar navbar-expand-lg navbar-light"  style="height:63px;display:flex;justify-content: flex-end;padding:0px;align-items: center;">' +
        '<button style="background-color:white;color:white;" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">' +
        '<span class="navbar-toggler-icon"></span>' +
        '</button>' +
        '<div class="collapse navbar-collapse navheader" id="navbarSupportedContent">' +
        '<ul class="navbar-nav mr-auto" id="pcHeader" style="position:relative;z-index:999">' +
/*        '<li class="nav-item">' +
        '<a class="nav-link" href="./design.html" >设计领域</a>' +
        '</li>' +
        '<li class="nav-item">' +
        '<a class="nav-link" href="./serve.html" >服务范畴</a>' +
        '</li>' +
        '<li class="nav-item">' +
        '<a class="nav-link" href="./company.html">关于雅鸟</a>' +
        '</li>' +
        '<li class="nav-item">' +
        '<a class="nav-link" href="./news.html">新闻中心</a>' +
        '</li>' +
        '<li class="nav-item dropdown">' +
        '<a class="nav-link dropdown-toggle" href="./contactaddr.html" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
        '联系我们' +
        '</a>' +
        '<div class="dropdown-menu" aria-labelledby="navbarDropdown">' +
        '<a class="dropdown-item" href="./contactaddr.html">联系我们</a>' +
        '<a class="dropdown-item" href="./join.html">加入我们</a>' +
        '</li>' +*/
        '</ul>' +
        '</div>' +
        '</nav>' +
        '</div>';

    let headStyle = '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
      '<meta http-equiv="X-UA-Compatible" content="ie=edge">' +
      '<meta name="robots" content="all">' + 
      '<meta name="author" content="w3school.com.cn">' + 
      '<link rel="icon" type="image/png" sizes="16x16" href="./../images/home.png">' +
      '<title>雅鸟设计</title>' +
    '</head>' +
    '<body>' +
    '<link rel="stylesheet" href="./../css/lib/bootstrap.min.css">' +
        '<link rel="stylesheet" href="./../css/module/header.css">' +
        '<link rel="stylesheet" href="./../css/module/footer.css">' +
        '<link rel="stylesheet" href="./../css/pages/' + headTitle + '.css">' +
        '<script src="./../js/lib/jquery-3.1.1.min.js"></script>' +
        '<script src="./../js/lib/bootstrap.min.js"></script>' +
        '<script src="./../js/module/common.js"></script>' +
        '<script src="./../js/module/utils.js"></script>' +
        '<script src="./../js/module/md5.js"></script>' +
        '<script src="./../js/pages/' + headTitle + '.js"></script>';
    document.write(headStyle);
    document.write(head);
    if (headTitle != 'index') {
        let themetitle = cssArr[0].getAttribute('data-theme');
        let themet = '<div class="plate">' +
            themetitle +
            '</div>';
        document.write(themet);
    }
})();