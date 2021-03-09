require("paginationjs")
$(document).ready(function () {
    $('.pagination-container').pagination({
        dataSource: [1],
        autoHidePrevious: true,
        nextText: "",
        prevText: "",
    })
})
