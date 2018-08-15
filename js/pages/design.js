window.onload = () => {
    ajax(baseUrl + '/floorDistribution/getFloorDistributionListByParentId?parentId=1', 'design')
    sessionStorage.removeItem('typeName');
    sessionStorage.setItem('columnName', '设计领域');
    sessionStorage.setItem('columnUrl', 'design.html');
};