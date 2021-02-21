
$(document).ready(function (){
    const btnTxt  = $(".like-button__text")
    let counter = btnTxt.html()

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
        btnTxt.html(counter)
    })
})
