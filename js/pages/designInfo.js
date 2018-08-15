window.onload = () => {
    let id = getQueryVariable('id');
    let name = sessionStorage.getItem('name');
    let columnName = sessionStorage.getItem('columnName');
    let columnUrl = sessionStorage.getItem('columnUrl');
    designTitle(id,baseUrl+'/product/getProductListByFloorId?floorId='+id);
    let titlename = document.getElementsByClassName('titlename')[0];
    let title = document.getElementsByClassName('plate')[0];
    let column = document.getElementsByClassName('column')[0];
    column.innerHTML = columnName;
    column.href = columnUrl;
    title.innerHTML = name;
    titlename.innerHTML = name;
    sessionStorage.setItem('typeName', name);
    sessionStorage.setItem('typeId', id);
};