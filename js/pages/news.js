window.onload = () => {
  let titleList = document.getElementsByClassName('titleList');
  let plate = document.getElementsByClassName('plate')[0];
  let url = ['http://rapapi.org/mockjsdata/35927/qiyexinwen', 'http://rapapi.org/mockjsdata/35927/hangyezixun', 'http://rapapi.org/mockjsdata/35927/zhuangxiuzhishi'];
    //点击新闻标题变色事件
    let changeColor = () => {
      for (let i = 0; i < titleList.length; i++) {
        titleList[i].style.color = '#000000';
      }
    }
  ajax(url[0], 'news', 4)
  //点击新闻标题
  let newstitle = () => {
    for (let i in titleList) {
      titleList[i].onclick = () => {
        plate.innerHTML = titleList[i].innerHTML;
        changeColor(); //点击新闻标题变色
        titleList[i].style.color = '#94002C';
        //发起请求
        ajax(url[i], 'news', 4)
      }
    }
  }

  newstitle();
}