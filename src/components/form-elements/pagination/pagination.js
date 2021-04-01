require("paginationjs")
require("../../cards/room-card/room-card")
$(document).ready(function () {
    function simpleTemplating(data) {
        var html = '<ul>';
        $.each(data, function(index, item){
            html += '<li>'+ item +'</li>';
        });
        html += '</ul>';
        return html;
    }
    if ($("[data-pagination]").length){
    const container = $("[data-pagination]")
    const pagination = container.pagination({
        dataSource: [1, 2, 3, 4],
        pageSize: 1,
        autoHidePrevious: true,
        autoHideNext: true,
        nextText: "<span class='material-icons pagination__next'>arrow_forward</span>",
        prevText: "<span class='material-icons pagination__back'>arrow_backward</span>",

        callback: function(data, pagination) {
            const html = simpleTemplating(data);
            $("[data-data-container]").html(html)
        }
    })
    }
})
