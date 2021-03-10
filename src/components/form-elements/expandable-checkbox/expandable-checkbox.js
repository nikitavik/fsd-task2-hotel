$(document).ready(function () {
    const marker = $(".expandable-checkbox__marker")
    $(".expandable-checkbox__label").click(
        function (){
            $(".expandable-checkbox__list").slideToggle()

            if (marker.hasClass("checkbox-expanded")){
                marker.removeClass("checkbox-expanded")
            } else {
                marker.addClass("checkbox-expanded")
            }
        })

})