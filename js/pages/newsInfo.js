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
            let result = res.result;
            let preNext = res.preNext;

            newsInfocontenttitle.innerHTML = result.title;
            newsInfocontenttime.innerHTML = formatDateTime(result.pushTime);
            newsInfocontentcon.innerHTML = result.content;

            if (preNext.length === 2) {
                back.innerHTML = preNext[0].title;
                back.onclick = () => {
                    window.location.href = 'newsInfo.html?id=' + preNext[0].id;
                };
                next.innerHTML = preNext[1].title;
                next.onclick = () => {
                    window.location.href = 'newsInfo.html?id=' + preNext[1].id;
                };
            } else if (preNext.length === 1) {
                if (preNext[0].is_top>result.isTop||preNext[0].sort>result.sort||preNext[0].id>result.id) {
                    back.innerHTML = preNext[0].title;
                    back.onclick = () => {
                        window.location.href = 'newsInfo.html?id=' + preNext[0].id;
                    };
                } else {
                    next.innerHTML =  preNext[0].title;
                    next.onclick = () => {
                        window.location.href = 'newsInfo.html?id=' + preNext[0].id;
                    };
                }
            }
        },
        error: function (res) {
            console.log(res);
        }
    });
};