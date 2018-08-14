window.onload = () => {

  let id = getQueryVariable('id');
  let name = sessionStorage.getItem('name');
  console.log(name);
  designTitle(id);
  let titlename = document.getElementsByClassName('titlename')[0];
  let title = document.getElementsByClassName('plate')[0];
  title.innerHTML = name;
  titlename.innerHTML = name;
}