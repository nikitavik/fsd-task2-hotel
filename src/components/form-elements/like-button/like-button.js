let counter = $(".like-button__text").html()
$(document).ready(function (){
    $(".like-button__label").click(function (){
        if ($(this).hasClass("liked")) {
            $(this).removeClass("liked")
            $(".like-button__text").removeClass("liked")
            $(".like-button__mark").removeClass("liked").html("favorite_border")
            counter = parseInt(counter) - 1
            }

        else {
            $(this).addClass("liked")
            $(".like-button__mark").addClass("liked").html("favorite")
            $(".like-button__text").addClass("liked")
            counter = parseInt(counter) + 1
        }
        $(".like-button__text").html(counter)
    })
})
