window.onload = () => {
    let columnName = sessionStorage.getItem('columnName');
    let columnUrl = sessionStorage.getItem('columnUrl');
    getStaff();
    let titlename = document.getElementsByClassName('titlename')[0];
    let plate = document.getElementsByClassName('plate')[0];

    if (columnName == null) column.nextElementSibling.style.display = 'none';
    titlename.innerHTML = plate.innerHTML;
};