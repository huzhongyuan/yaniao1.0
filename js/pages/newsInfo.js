window.onload = () => {
  let id = getQueryVariable('id');
  alert(id);
  let newsname = sessionStorage.getItem('newsname');
  let plate = document.getElementsByClassName('plate')[0];
  plate.innerHTML = newsname;
  console.log(newsname);
}