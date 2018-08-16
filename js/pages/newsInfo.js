window.onload = () => {
    let id = getQueryVariable('id');

    let newsnam = sessionStorage.getItem('newsname');
    let type = sessionStorage.getItem('type');

    let typename = document.getElementsByClassName('typename')[0];
    typename.innerHTML = type;
    let newsname = document.getElementsByClassName('newsname')[0];
    newsname.innerHTML = newsnam;

    // 加载文章内容
    $.ajax({
        url: baseUrl + '/articlePush/getArticleDetail/' + id,
        success: function (res) {
            let newsInfocontenttitle = document.getElementsByClassName('newsInfocontenttitle')[0];
            let newsInfocontenttime = document.getElementsByClassName('newsInfocontenttime')[0];
            let newsInfocontentcon = document.getElementsByClassName('newsInfocontentcon')[0];
            let back = document.getElementsByClassName('back')[0];
            let next = document.getElementsByClassName('next')[0];

            newsInfocontenttitle.innerHTML = res.result.title;
            newsInfocontenttime.innerHTML = formatDateTime(res.result.pushTime);
            newsInfocontentcon.innerHTML = res.result.content;


        },
        error: function (res) {
            console.log(res);
        }
    });
};