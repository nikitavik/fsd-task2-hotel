require("paginationjs")
$(document).ready(function () {
    try {
        $('.pagination-container').pagination({
            dataSource: [1],
            autoHidePrevious: true,
            nextText: "",
            prevText: "",
        })
    }
    catch (err){
        console.log("Pagination not found")
    }
})
