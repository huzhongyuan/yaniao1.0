window.onload = () => {

    let id = getQueryVariable('id');

    let columnName = sessionStorage.getItem('columnName');
    let columnUrl = sessionStorage.getItem('columnUrl');
    let name = sessionStorage.getItem('name');
    let typeName = sessionStorage.getItem('typeName');
    let typeId = sessionStorage.getItem('typeId');

    let column = document.getElementsByClassName('column')[0];
    let type = document.getElementsByClassName('type')[0];
    let titlename = document.getElementsByClassName('titlename')[0];
    let plate = document.getElementsByClassName('plate')[0];

    plate.innerHTML = name;
    titlename.innerHTML = name;
    column.innerHTML = columnName;
    column.href = columnUrl;
    if (typeName != null) {
        type.innerHTML = typeName;
        type.href = 'designInfo.html?id=' + typeId;
    } else {
        type.style.display = 'none';
        type.nextElementSibling.style.display = 'none';
    }

    // 加载基本信息
    $.ajax({
        url: baseUrl + '/product/getProductDetailById/' + id,
        success: function (res) {
            let headertitile = document.getElementsByClassName('headertitile')[0];
            let headercontetnt = document.getElementsByClassName('headercontetnt')[0];
            let designInfodes = document.getElementsByClassName('designInfodes')[0];
            headertitile.innerHTML = res.result[0].ch_name;
            headercontetnt.innerHTML = res.result[0].sketch;
            designInfodes.innerHTML = res.result[0].description;
            loadDetail(res.result[0].show_url);// 加载详情图片
        },
        error: function (res) {
            console.log(res);
        }
    });
    // 得到详情图片
    function loadDetail(imgUrl) {
        $.ajax({
            url: baseUrl + '/product/getProductPicById/' + id,
            success: function (res) {
                let etalage = document.getElementById('etalage');
                let etalagesm = document.getElementById('etalagesm');
                let eta = '';
                let etasm = '';
                if (res.result != null && res.result.length>0) {
                    for (let i = 0; i < res.result.length; i++) {
                        eta += '<li>\n' +
                            '                    <img onerror="imgNotfind(event);" class="etalage_thumb_image largeimage" src="' + res.result[i].show_url + '"/>\n' +
                            '                    <img onerror="imgNotfind(event);" class="etalage_source_image imagesmax" src="' + res.result[i].show_url + '"/>\n' +
                            '                </li>';
                        etasm += '<li>\n' +
                            '                        <img onerror="imgNotfind(event);" class="etalage_source_image minimages" src="' + res.result[i].show_url + '"/>\n' +
                            '                    </li>';
                    }
                } else {
                    eta += '<li>\n' +
                        '                    <img onerror="imgNotfind(event);" class="etalage_thumb_image largeimage" src="' + imgUrl + '"/>\n' +
                        '                    <img onerror="imgNotfind(event);" class="etalage_source_image imagesmax" src="' + imgUrl + '"/>\n' +
                        '                </li>';
                    etasm += '<li>\n' +
                        '                        <img onerror="imgNotfind(event);" class="etalage_source_image minimages" src="' + imgUrl + '"/>\n' +
                        '                    </li>';
                }

                etalage.innerHTML = eta;
                etalagesm.innerHTML = etasm;
                $('#etalage').etalage({
                    thumb_image_width: 500,
                    thumb_image_height: 334,
                    source_image_width: 1000,
                    source_image_height: 900,
                    zoom_area_width: 500,//放大镜的大小
                    zoom_area_height: 500,//放大镜的高度
                    zoom_area_distance: 5,//大图显示的位置
                    small_thumbs: 4,//略缩图的个数
                    smallthumb_inactive_opacity: 0.3,//没有放大镜部分的透明度
                    smallthumbs_position: 'bottom',//略缩图的位置，本例是在左边从上到下排列，默认是在底部从左到右排列
                    show_icon: false,
                    autoplay: true,//是否自动轮播，默认是true，也就是默认是自动
                    keyboard: false,
                    zoom_easing: true//淡入淡出效果
                });
            },
            error: function (res) {
                console.log(res);
            }
        });
    }
    // 得到主创团队
    $.ajax({
        url: baseUrl + '/product/getProductTeamById/' + id,
        success: function (res) {
            let team = document.getElementById('team');
            let html = '';
            for (let i = 0; i < res.result.length; i++) {
                html += '<img style="cursor: pointer" onclick="gotoUrl('+res.result[i].id+');" onerror="imgNotfind(event);" src="'+res.result[i].show_url+'" alt="">';
            }
            team.innerHTML = html;
        },
        error: function (res) {
            console.log(res);
        }
    });
    // 得到评价,风格标签
    $.ajax({
        url: baseUrl + '/product/getProductCommentAndTagsById/' + id,
        success: function (res) {
            let headerstyle = document.getElementsByClassName('headerstyle')[0];
            let xj = document.getElementsByClassName('xj')[0];
            let xjtext = document.getElementsByClassName('xjtext')[0];

            let html = '';
            for (let i=0; i<res.comments[res.comments.length-1].commentScore; i++) {
                html += '<i class="fa fa-star" aria-hidden="true"></i>';
            }
            xj.innerHTML = '客户评价：'+html;
            xjtext.innerHTML = res.comments[res.comments.length-1].description;

            let tags = '风格类型：';
            for (let i = 0; i < res.tags.length; i++) {
                tags += '<span>'+res.tags[i].name+'</span>';
            }
            headerstyle.innerHTML = tags;
        },
        error: function (res) {
            console.log(res);
        }
    });
};
// 跳转Url
function gotoUrl(id) {
    window.location.href = 'memberInfo.html?id=' + id;
}