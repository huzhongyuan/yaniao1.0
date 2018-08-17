var pageName = '';
(function () {
    let cssArr = document.getElementById('page');
    headTitle = cssArr.getAttribute('data-title');
    pageName = headTitle;
    let head = '<div class="header" id="header" style="display: none">' +
        '<div><img src="" id="logo" style="cursor: pointer" alt=""></div>' +
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

    let headStyle = '<link rel="stylesheet" href="./../css/lib/bootstrap.min.css">' +
        /*'<link href="//netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">">' +
        '<link rel="stylesheet" href="./../css/lib/font-awesome.css">' +*/
        '<link rel="stylesheet" href="./../css/module/header.css">' +
        '<link rel="stylesheet" href="./../font-awesome-4.7.0/css/font-awesome.css">' +
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
        let themetitle = cssArr.getAttribute('data-theme');
        let themet = '<div class="plate">' +
            themetitle +
            '</div>';
        document.write(themet);
    }
})();