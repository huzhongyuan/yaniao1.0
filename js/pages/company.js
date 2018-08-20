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
                console.log(res)
                let result = res.result;
                let html = '<div class="teamphoto">' ;
                for (let i=0; i<result.length; i++) {
                    html += '<img onmouseover="mouseover(this);" onmouseout="mouseout(this);" onclick="gotoDetail('+result[i].id+')" data-name="'+result[i].name+'" data-station-name="'+result[i].station_name+'" src="'+result[i].show_url+'" alt="" onerror="imgNotfind(event);">';
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

/**
 * 鼠标移入事件
 * @param that
 */
function mouseover(that) {
    var w = parseInt($(that).css("width"))*1.5;//li的宽
    var h = parseInt($(that).css("height"))*1.5;//li的高
    var imgUrl = $(that).attr("src");
    /*
     <p class="showName"></p>
     <p class="showStation"></p>
    * */
    $(".showName").text($(that).attr("data-name")+" "+ $(that).attr("data-station-name"));
    //$(".showStation").text($(that).attr("data-station-name"));
    $(".showImage").css({
        "left":event.clientX+5,
        "top":event.clientY+20,
        "width":w+"px",
        "height":h+"px",
        "background":"url('"+imgUrl+"') no-repeat",
        "background-size":"100% 100%",
        "padding":h-24+"px 0px 0px",
    }).show();
}
/**
 * 鼠标移出事件
 * @param that
 */
function mouseout(that) {
    $(".showImage").hide()
}