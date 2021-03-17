$(document).ready(function (){
    $(".dropdown__field").click(function () {
        $(".dropdown__options").slideToggle()
        $(".dropdown__field").toggleClass("expand")
    })

    const counters = document.getElementsByClassName("dropdown__counter")
    const inputs = document.getElementsByClassName("dropdown__input")
    const text = document.getElementsByClassName("dropdown__text")

    const plus = document.getElementsByClassName("dropdown__plus")
    const minus = document.getElementsByClassName("dropdown__minus")
    const clear = document.getElementsByClassName("d-clear")
    const confirm = document.getElementsByClassName("d-confirm")
    
    const dropdown = {
        plus :function (option) {
            let i = counters[option].innerHTML
            counters[option].innerHTML = parseInt(i) + 1
            confirm[0].classList.remove("killed")
            },
        minus: function (option) {
            let i = counters[option].innerHTML
            if (i > 0){
                counters[option].innerHTML = parseInt(i) - 1
            }
            },
        clear: function () {
            for (let i = 0; i < counters.length; i++){
                counters[i].innerHTML = 0
                inputs[i].value = 0
                text[0].innerHTML = "Сколько Гостей?"
            }

            clear[0].classList.add("killed")
        },
        confirm: function (inputs) {
            total = 0
            for (let i = 0; i < counters.length; i++){
                total = total + parseInt(counters[i].innerHTML)
                inputs[i].value = counters[i].innerHTML
            }
            let guest
                if (total <= 4 ) guest = "Гостя"
                else if (total === 1) guest = "Гость"
                else guest = "Гостей"
            text[0].innerHTML = `${total} ${guest}`
            if (total === 0) {dropdown.clear()}
        }
    }
    // Подключение функций
    for (let i = 0; i < counters.length; i++){
        plus[i].onclick = function () {dropdown.plus(i); clear[0].classList.remove("killed")}
        minus[i].onclick = function () {dropdown.minus(i)}
    }
    clear[0].onclick = function () {
        dropdown.clear()
        $(".dropdown__options").slideToggle()
    }
    confirm[0].onclick = function () {
        dropdown.confirm(inputs)
        $(".dropdown__options").slideToggle()
    }


})
