window.onload = () => {
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

function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}
let id = getQueryVariable('id');
console.log(id);
}