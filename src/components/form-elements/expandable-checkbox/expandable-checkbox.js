$(document).ready(function () {
    $(".expandable-checkbox__marker, .expandable-checkbox__name").click(function (){
        $(".expandable-checkbox__list").slideToggle()
    })
})