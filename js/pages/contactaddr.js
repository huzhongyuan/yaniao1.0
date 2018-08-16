window.onload = () => {
    // 取得经纬度
    $.ajax({
        url: baseUrl + '/sysDictionary/getDicByKeytable?Keytable=latLong',
        success: function (res) {
            let latLong = res[0].keyValue;
            let arr = latLong.split(',');
            var map = new AMap.Map("allmap", {
                resizeEnable: true,
                zoom: 16,
                center: [arr[0],arr[1]]
            });
            var marker=new AMap.Marker({
                map:map,
                position:new AMap.LngLat(arr[0],arr[1])
            });
        },
        error: function (res) {
            console.log(res);
        }
    });
};