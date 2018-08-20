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
    if("团队风采" == $(that).text()){
        /*$("#content img").css("cursor","pointer");
        $("#content img").click(function () {
            window.location.href = "memberList.html";
        })*/
        $.ajax({
            url: baseUrl + '/staff/getStaffById?id=',
            success: function (res) {
                let result = res.result;
                let html = '<div class="teamphoto">\n' ;
                for (let i=0; i<result.length; i++) {
                    html += '<img onclick="gotoDetail('+result[i].id+')" src="'+result[i].show_url+'" alt="">';
                }
                html += '</div>';
                content.innerHTML = html;
            },
            error: function (res) {
                console.log(res);
            }
        })
    } else {
        content.innerHTML = list[i].description;
    }
}

function gotoDetail(id) {
    window.location.href = 'memberInfo.html?id='+id;
}