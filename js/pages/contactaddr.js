window.onload = () => {
    var map = new AMap.Map("allmap", {
        resizeEnable: true,
        zoom: 13,
    });
    AMap.service(["AMap.PlaceSearch"], function() {
        var placeSearch = new AMap.PlaceSearch({ //构造地点查询类
            pageSize: 1,
            pageIndex: 1,
            city: "", //城市
            map: map,
            panel: "",
        });
        //关键字查询
        placeSearch.search('重庆');
    });
};