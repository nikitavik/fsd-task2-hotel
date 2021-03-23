$(document).ready(function () {
    const menu = $(".search-menu")
    const body = $(".body")
    $(".search-menu-open").click(function () {
        $(".search-menu").slideToggle()


        if (!menu.hasClass("slide")) {
            menu.addClass("slide")
        } else {menu.removeClass("slide")}

        if (!body.hasClass("no-scroll")) {
            body.addClass("no-scroll")
        } else {body.removeClass("no-scroll")}
    })
})