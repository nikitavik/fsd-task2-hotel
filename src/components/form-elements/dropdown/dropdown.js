$(document).ready(function () {
    $.fn.dropdown = function (type) {
        // Slide Toggle
        const opBlock = $(this).find("[data-dropdown-options]")
        const field = $(this).find("[data-dropdown-field]")
        field.click(function () {
            opBlock.slideToggle({start: ()=> {field.toggleClass("expand")}})
        })

        // Main
        const confirm = $(this).find("[data-dropdown-confirm-button]")
        const clear = $(this).find("[data-dropdown-clear-button]")
        const counters = $(this).find("[data-dropdown-counter]")
        const inputs = $(this).find("[data-dropdown-input]")
        const text = $(this).find("[data-dropdown-text]")

        // Every count
        this.click(function () {
            let total = 0
            counters.each(function (index) {
                total += parseInt(counters[index].innerHTML)
            })
            console.log(total)
            if (total === 0) {
                clear.css("display", "none")
                confirm.css("display", "none")
            } else {
                clear.css("display", "block")
                confirm.css("display", "block")
            }
        })

        // Buttons Clicks
        confirm.click(function () {
            counters.each(function () {
                inputs.val(counters.html())
            })
            opBlock.slideToggle({start: ()=> {field.toggleClass("expand")}})

            // Write
            if (type === "guest"){
                let guest
                let total = 0
                counters.each(function (index) {
                    total += parseInt(counters[index].innerHTML)
                })
                switch (true) {
                    case total === 1:
                        guest = "Гость"
                        break
                    case total <= 4:
                        guest = "Гостя"
                        break
                    default:
                        guest = "Гостей"
                }
                text.val(`${total} ${guest}`)
            }
            if (type === "facility"){
                let facilities = ["Спальни", "Кровати", "Ванные комнаты"]
                let total = []
                counters.each(function (index) {
                    if (counters[index].innerHTML > 0){
                        total.push(` ${counters[index].innerHTML} ${facilities[index]}`)
                    }
                })
                text.val(total)
            }
        })

        clear.click(function () {
            if (type === "guest") {
                counters.each(function () {
                    counters.html(0)
                    text.val("Сколько Гостей?")
                    inputs.val("")
                })
            }
            if (type === "facility"){
                counters.each(function () {
                    counters.html(0)
                    text.val("Выберите удобства")
                    inputs.val("")
                })
            }
        })

        // Options
        const options = $(this).find("[data-dropdown-option]")
        options.each(function(){
            let counter = $(this).find("[data-dropdown-counter]")
            const plus = $(this).find("[data-dropdown-plus]")
            const minus = $(this).find("[data-dropdown-minus]")
            plus.click(function (){
                let number = counter.html()
                number = parseInt(number) + 1
                counter.html(number)
            })
            minus.click(function (){
                let number = counter.html()
                if (number > 0){
                    number = parseInt(number) - 1
                    counter.html(number)
                }
            })
        })

    }


    $("[data-dropdown=guest]").dropdown("guest")
    $("[data-dropdown=test]").dropdown("guest")
    $("[data-dropdown=search-card]").dropdown("guest")
    $("[data-dropdown=booking]").dropdown("guest")


    $("[data-dropdown=facility]").dropdown("facility")
})


