window.onload = () => {
    ajax(baseUrl + '/floorDistribution/getFloorDistributionListByParentId?parentId=2', 'design')
    sessionStorage.removeItem('typeName');
    sessionStorage.setItem('columnName', '服务范畴');
    sessionStorage.setItem('columnUrl', 'serve.html');
};