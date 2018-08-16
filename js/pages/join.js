window.onload = () => {
    // 加载招聘信息
    ajax(baseUrl + '/articlePush/getArticleList?article_type=2', 'loadEmp', 1, 6);
    // 分页插件
    $.jqPaginator('#pagination', {
        totalPages: 100,
        visiblePages: 5,
        currentPage: 1,
        prev: '<li class="prev"><a href="javascript:;">上一页</a></li>',
        next: '<li class="next"><a href="javascript:;">下一页</a></li>',
        page: '<li class="page"><a href="javascript:;">{{page}}</a></li>',
        onPageChange: function (page,type) {
            // pageNum = page;
            ajax(baseUrl + '/articlePush/getArticleList?article_type=2', 'loadEmp', page, 6);
        }
    });
};