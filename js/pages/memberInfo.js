window.onload = () => {
    let personNameSpan = document.getElementsByClassName('personNameSpan')[0];
    let personName = sessionStorage.getItem('personName');
    personNameSpan.innerHTML = personName;

    // 加载员工基本信息
    let id = getQueryVariable('id');
    $.ajax({
        url: baseUrl + '/staff/getStaffById?id=' + id,
        success: function (res) {
            let personImg = document.getElementsByClassName('personImg')[0];
            let name = document.getElementsByClassName('name')[0];
            let position = document.getElementsByClassName('position')[0];
            let description = document.getElementsByClassName('description')[0];

            personImg.src = res.result[0].show_url;
            name.innerHTML = res.result[0].name;
            position.innerHTML = res.result[0].station_name;
            description.innerHTML = res.result[0].description;
        },
        error: function (res) {
            console.log(res);
        }
    });
};