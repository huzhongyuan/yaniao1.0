let list = null;

window.onload = () => {
    // 加载数据
    $.ajax({
        url: baseUrl + '/speechAndOverview/getSpeechAndOverviewByTypeId?type=',
        success: function (res) {
            let themelist = document.getElementsByClassName('themelist')[0];
            let content = document.getElementById('content');
            list = res.result;
            let title = '';
            for (let i=0; i<res.result.length; i++) {
                title += '<span onclick="changeTitle(this,'+i+')">'+res.result[i].name+'</span>';
            }
            themelist.innerHTML = title;
            content.innerHTML = res.result[0].description;
        },
        error: function (res) {
            console.log(res);
        }
    })
};

// 点击事件改变
function changeTitle(that,i) {
    let content = document.getElementById('content');
    content.innerHTML = list[i].description;
    if("团队风采" == $(that).text()){
        console.log(888)
        $("#content img").css("cursor","pointer");
        $("#content img").click(function () {
            window.location.href = "memberList.html";
        })
    }
}