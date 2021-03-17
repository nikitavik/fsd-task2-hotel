// Main Code
require("air-datepicker")
require("air-datepicker/dist/css/datepicker.css")
require("air-datepicker/dist/js/datepicker")
$(document).ready(function () {
    const dateInput = $(".date-dropdown__input")
    // const dateAltInput = $(".date-dropdown__alternative")

    const dateExpand = $(".date-dropdown__block")

    const dropdownDatepicker = dateInput.datepicker({
        // inline: true,
        // keyboardNav:true,
        classes:"date-drop",
        clearButton: true,
        offset: 5,
        // range: true,
        // multipleDatesSeparator: "-",
        todayButton: true,
        disableNavWhenOutOfRange: false,
        minDate: new Date(),
        nextHtml: "<div class='material-icons date-dropdown__forward' style='color: #BC9CFF'>arrow_forward</div>",
        prevHtml: "<div class='material-icons date-dropdown__backward' style='color: #BC9CFF'>arrow_backward</div>",

        onRenderCell: function (day, cellType) {
            if (cellType === 'day'){
                return {
                    classes: 'date-dropdown__day',
                }
            }
        }
    })

    var dropdownDate = dropdownDatepicker.data("datepicker")

    //  Full Click Ability

    dateExpand.click(function () {
        if(!dateExpand.hasClass("active")){
            dateExpand.addClass("active")
            dropdownDate.show()

        } else {
            dateExpand.removeClass("active")
            dropdownDate.hide()
        }
    })
    // Buttons Functions and Styles

    const buttons = $(".date-drop .datepicker--button")

    buttons.toJqArray()[0].html("<button class='borderless-button'>Применить</button>")

    buttons.toJqArray()[1].html("<button class='borderless-button'>Отчистить</button>")

    buttons[0].click(function () {
        dropdownDate.hide()
        dateExpand.removeClass("active")
    })


    // Field separation

})