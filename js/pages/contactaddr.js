
var map = new AMap.Map("allmap", {
    resizeEnable: true
});
AMap.service(["AMap.PlaceSearch"], function() {
    var placeSearch = new AMap.PlaceSearch({ //构造地点查询类
        pageSize: 5,
        pageIndex: 1,
        city: "", //城市
        map: map,
        panel: ""
    });
    //关键字查询
    placeSearch.search('大竹仁爱医院');
});