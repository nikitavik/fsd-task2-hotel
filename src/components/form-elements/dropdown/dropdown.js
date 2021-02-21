$(document).ready(function (){
    $(".dropdown__field").click(function () {
        $(".dropdown__options").slideToggle()
        $(".dropdown__field").toggleClass("expand")
    })

    const counters = document.getElementsByClassName("dropdown__counter")
    const plus = document.getElementsByClassName("dropdown__plus")
    const minus = document.getElementsByClassName("dropdown__minus")
    const clear = document.getElementsByClassName("d-clear")
    const dropdown = {
        plus :function (option) {
            let i = counters[option].innerHTML
            counters[option].innerHTML = parseInt(i) + 1
            },
        minus: function (option) {
            let i = counters[option].innerHTML
            if (i > 0){counters[option].innerHTML = parseInt(i) - 1}
            },
        clear: function () {
            for (let i = 0; i < counters.length; i++){counters[i].innerHTML = 0}
            clear[0].classList.add("killed")
        },
        confirm: function () {

        }
    }
    // Подключение функций
    for (let i = 0; i < counters.length; i++){
        plus[i].onclick = function () {dropdown.plus(i); clear[0].classList.remove("killed")}
        minus[i].onclick = function () {dropdown.minus(i)}
    }
    clear[0].onclick = function () {dropdown.clear()}
})
