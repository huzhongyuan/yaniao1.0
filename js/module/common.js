//获取地址栏get传参
var aQuery = window.location.href.split("?");//取得Get参数
var aGET = new Array();
var aUrl = aQuery[0];//请求地址，除去参数部分
if(aQuery.length > 1)
{
    var aBuf = aQuery[1].split("&");
    for(var i=0, iLoop = aBuf.length; i<iLoop; i++)
    {
        var aTmp = aBuf[i].split("=");//分离key与Value
        aGET[aTmp[0]] = aTmp[1];
    }
}

//判断是否微信登陆
function isWeiXin() {
    var ua = window.navigator.userAgent.toLowerCase();
    console.log(ua);//mozilla/5.0 (iphone; cpu iphone os 9_1 like mac os x) applewebkit/601.1.46 (khtml, like gecko)version/9.0 mobile/13b143 safari/601.1
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true;
    } else {
        return false;
    }
}

//设置图片加载失败默认图片
function imgNotfind(e) {
    var img = e.srcElement;
    img.src = "http://www.watx365.com/img/zwimg.png";
}

//设置默认图片
function imgDefault(e) {
    var img = e.srcElement;
    img.src = "/img/forme3.png";
}
//将表单序列化转换为json
function formToJson(obj) {
    var data = obj;
    data = decodeURIComponent(data, true);//防止中文乱码
    data = data.replace(/&/g, "','");
    data = data.replace(/=/g, "':'");
    data = "({'" + data + "'})";
    obj = eval(data);
    return obj;
}
//判断为空
function empty(str) {
	str = $.trim(str);
	return (str == "" || str == 'undefined' || str == "null" || str == null || typeof(str) == undefined);
}

//h5 本地存储
localStorageUtils = {
    //设置存储
    setParam : function (name,value){
        localStorage.setItem(name,value)
    },
	//设置存储json字符串
	setJsonStr : function (name,value) {
        localStorageUtils.setParam(name,"'"+JSON.stringify(value));
    },
    //获取存储
    getParam : function(name){
        return localStorage.getItem(name)
    },
	//获取json对象存储
	getJson:function (name) {
    	console.log(name)
    	var param = localStorageUtils.getParam(name);
        return empty(param) ? null : JSON.parse(param.substr(1,param.length));
    },
    /**
     * 删除存储
     */
    del:function(name){
        localStorage.removeItem(name);
    },
}

/**
 * 判断当前手机网络连接情况
 */
function isLine() {
    var el = document.body;
    if (el.addEventListener) {
        window.addEventListener("online", function () {
            return "online";}, true);
        window.addEventListener("offline", function () {
            return "offline";}, true);
    }else if (el.attachEvent) {
        window.attachEvent("ononline", function () {
            return "online";});
        window.attachEvent("onoffline", function () {
            return "offline";});
    }else {
        window.ononline = function () {
            return "online";};
        window.onoffline = function () {
            return "offline";};
    }
}


/**
 * 根据日期获取星座
 * @param month 月份
 * @param date 天数
 */
function xingzuo(month,date) {
	var value = "请选择日期";
    //根据日历显示星座
    if (month == 1 && date >=20 || month == 2 && date <=18) {value = "水瓶座";}
    if (month == 1 && date > 31) {value = "Huh?";}
    if (month == 2 && date >=19 || month == 3 && date <=20) {value = "双鱼座";}
    if (month == 2 && date > 29) {value = "Say what?";}
    if (month == 3 && date >=21 || month == 4 && date <=19) {value = "白羊座";}
    if (month == 3 && date > 31) {value = "OK. Whatever.";}
    if (month == 4 && date >=20 || month == 5 && date <=20) {value = "金牛座";}
    if (month == 4 && date > 30) {value = "I'm soooo sorry!";}
    if (month == 5 && date >=21 || month == 6 && date <=21) {value = "双子座";}
    if (month == 5 && date > 31) {value = "Umm ... no.";}
    if (month == 6 && date >=22 || month == 7 && date <=22) {value = "巨蟹座";}
    if (month == 6 && date > 30) {value = "Sorry.";}
    if (month == 7 && date >=23 || month == 8 && date <=22) {value = "狮子座";}
    if (month == 7 && date > 31) {value = "Excuse me?";}
    if (month == 8 && date >=23 || month == 9 && date <=22) {value = "室女座";}
    if (month == 8 && date > 31) {value = "Yeah. Right.";}
    if (month == 9 && date >=23 || month == 10 && date <=22) {value = "天秤座";}
    if (month == 9 && date > 30) {value = "Try Again.";}
    if (month == 10 && date >=23 || month == 11 && date <=21) {value = "天蝎座";}
    if (month == 10 && date > 31) {value = "Forget it!";}
    if (month == 11 && date >=22 || month == 12 && date <=21) {value = "人马座";}
    if (month == 11 && date > 30) {value = "Invalid Date";}
    if (month == 12 && date >=22 || month == 1 && date <=19) {value = "摩羯座";}
    if (month == 12 && date > 31) {value = "No way!";}
    return value;
}

//获取当前日期(yy-mm-dd）
function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate;
    return currentdate;
}

//获取当前日期时间（yy-mm-dd hh:mm:ss）
function getNowFormatDateTime() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
        + " " + date.getHours() + seperator2 + date.getMinutes()
        + seperator2 + date.getSeconds();
    return currentdate;
}

//时间戳转时间 yyyy-mm-dd hh:mm:ss
function format(timestamp)
{
    //timestamp是整数，否则要parseInt转换,不会出现少个0的情况

    var time = new Date(timestamp);
    var year = time.getFullYear();
    var month = time.getMonth()+1;
    var date = time.getDate();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    return year+'-'+add0(month)+'-'+add0(date)+' '+add0(hours)+':'+add0(minutes)+':'+add0(seconds);
}
/**
 * 时间格式化
 * @param inputTime
 * @returns {string}
 */
function formatDateTime(inputTime) {
    var date = new Date(inputTime);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    var h = date.getHours();
    h = h < 10 ? ('0' + h) : h;
    var minute = date.getMinutes();
    var second = date.getSeconds();
    minute = minute < 10 ? ('0' + minute) : minute;
    second = second < 10 ? ('0' + second) : second;
    return y + '-' + m + '-' + d+' '+h+':'+minute+':'+second;
};
/*公用验证方法开始*/
//验证密码
function ckPwd(str) {
    var myreg = /^[0-9a-z]{6,20}$/;
    return myreg.test(str);
}

//验证邮箱
function ckMail(str) {
    var myreg = /^[\w\-\.]+@[\w\-\.]+(\.\w+)+$/;
    return myreg.test(str);
}

//验证是否为中文名
function ckName(str) {
    var reg = /^[\u4E00-\u9FA5]+$/; //全都是汉字
    return reg.test(str);
}

//验证邮政编码
function ckCode(str) {
    var reg = /^[1-9][0-9]{5}$/;
    return reg.test(str);
}

//验证手机号码
function ckPhone(str) {
    var regPartton = /^(1)[0-9]{10}$/;
    return regPartton.test(str);
}

//验证电话
function ckTel(str) {
    var reg = /^[(]?0\d{2,3}[)]?\s*[-]?\s*\d{7,8}$/; //010-87989898 01098989898 (0712)8989898 010 - 23343434 这些格式的座机号码都满足
    return reg.test(str);
}
//验证身份证号码
function isCardNo(str)
{
    // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
    var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    return reg.test(str);
}

//验证用户名
function ckUsername(str) {
    var myreg = /^[0-9a-z]{4,16}$/;
    return myreg.test(str);
}
//验证码
function ckYzm(str) {
    var myreg = /^[0-9.-]{6}$/;
    return myreg.test(str);
}

//验证数字
function ckNum(num) {
    return /^[0-9-]+$/.test(num);
}

//验证QQ
function ckQq(argument) {
    return /^[1-9]{1}[0-9]{4,10}$/.test(argument);
}

//验证QQ
function ckPrice(argument) {
    return /^\d{1,10}(\.\d{1,2})?$/.test(argument);
}

//验证链接
function ckUrl(url) {
    var reg = '(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$';
//	var reg = "/^((https|http|ftp|rtsp|mms)?://)?" //
//       + "(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?" // ftp的user@
//       + "(([0-9]{1,3}.){3}[0-9]{1,3}" // IP形式的URL- 199.194.52.184
//       + "|" // 允许IP和DOMAIN（域名）
//       + "([0-9a-z_!~*'()-]+.)*" // 域名- www.
//       + "([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]." // 二级域名
//       + "[a-z]{2,6})" // first level domain- .com or .museum
//       + "(:[0-9]{1,4})?" // 端口- :80
//       + "((/?)|" // a slash isn't required if there is no file name
//       + "(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$/";
    reg = new RegExp(url,'g');
    return reg.test(url);
}
/*公用验证方法结束*/

//键盘回车事件
$(function(){
	document.onkeydown = function(e){ 
	    var ev = document.all ? window.event : e;
	    if(ev.keyCode==13) {
	    	var btn = $("#search_btn");
	    	if(btn.length > 0){
	    		btn.click();
	    	}
	    }
	}
});

/*将时间戳转换为时间
* time 时间戳
* format 格式化,年:y,月:m,日:d,时:h,分:i,秒s,如:(y年m-d h:i:s);
* 返回格式化好的时间
*/
function UnixTimeToDate(time, format) {
    var v = time;
    if (/^(-)?\d{1,10}$/.test(v)) {
        v = v * 1000;
    } else if (/^(-)?\d{1,13}$/.test(v)) {
        v = v * 1;
    } else {
        return '-';
    }
    var dateObj = new Date(v);
    // if (dateObj.format('yyyy') == "NaN") { /*alert("时间戳格式不正确");*/return; }
    var y = dateObj.getFullYear();
    var m = (dateObj.getMonth() + 1);
    if (m < 10) {
        m = "0" + m;
    }
    var d = dateObj.getDate();
    if (d < 10) {
        d = "0" + d;
    }
    var h = dateObj.getHours();
    if (h < 10) {
        h = "0" + h;
    }
    var i = dateObj.getMinutes();
    if (i < 10) {
        i = "0" + i;
    }
    var s = dateObj.getSeconds();
    if (s < 10) {
        s = "0" + s;
    }
    format = format.replace('y', y);//替换年-小写
    format = format.replace('Y', y);//替换年-大写
    format = format.replace('m', m);//替换月-小写
    format = format.replace('M', m);//替换月-大写
    format = format.replace('d', d);//替换日-小写
    format = format.replace('D', d);//替换日-小写
    format = format.replace('h', h);//替换时-小写
    format = format.replace('H', h);//替换时-小写
    format = format.replace('i', i);//替换分-小写
    format = format.replace('I', i);//替换分-小写
    format = format.replace('s', s);//替换秒-小写
    format = format.replace('S', s);//替换秒-小写
    //var UnixTimeToDate = dateObj.getFullYear() + '/' + (dateObj.getMonth() + 1) + '/' + dateObj.getDate() + ' ' + dateObj.getHours() + ':' + dateObj.getMinutes() + ':' + dateObj.getSeconds();
    return format;
}