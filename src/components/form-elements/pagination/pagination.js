require("paginationjs")

$(document).ready(function () {
    const data = $(".room-card")

    function template(data) {
        let html = "<ul>";
        $.each(data, function(index, item){
            html +=  "<li>" + item.parseHTML() + "</li>"
        });
        html = html + "</ul>"
        return html;
    }

        console.log(template(data))


    function log(content){
        window.console &&
        console.log(content)
    }

    const container = $(".pagination-container")
    container.pagination({
        dataSource: [1,2 ,3],
        pageSize: 2,
        autoHidePrevious: true,
        autoHideNext: true,
        nextText: "",
        prevText: "",

        callback: (data, pagination) => {
            let html = template(data)
            $(".pagination-data").html(html)

            console.log(html)
        }
    })
})
