window.onload = () => {
    // 加载数据
    $.ajax({
        url: baseUrl + '/speechAndOverview/getSpeechAndOverviewByTypeId?type=',
        success: function (res) {
            let themelist = document.getElementsByClassName('themelist')[0];
            let content = document.getElementById('content');
            let title = '';
            for (let i=0; i<res.result.length; i++) {
                title += '<span>'+res.result[i].name+'</span>';
            }
            themelist.innerHTML = title;
            content.innerHTML = res.result[2].description;
        },
        error: function (res) {
            console.log(res);
        }
    })
};