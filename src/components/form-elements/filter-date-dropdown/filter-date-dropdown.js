// Functions
$.fn.toJqArray = function(){
    let arr = [];
    $(this).each(function(){
        arr.push($(this));
    });
    return arr;
};

// Main Code

require("air-datepicker")
require("air-datepicker/dist/css/datepicker.css")
require("air-datepicker/dist/js/datepicker")
$(document).ready(function () {
    const filterDateInput = $(".filter-date-dropdown__input")
    const filterDateExpand = $(".filter-date-dropdown")

    const filterDatePicker = filterDateInput.datepicker({
        classes: "filter-date",
        // inline: true,
        keyboardNav: true,
        clearButton: true,
        offset: 5,
        range: true,
        multipleDatesSeparator: " - ",
        dateFormat:"dd M",
        todayButton: true,
        disableNavWhenOutOfRange: false,
        selectOtherMonths: false,
        minDate: new Date(),
        nextHtml: "<div class='material-icons date-dropdown__forward' style='color: #BC9CFF'>arrow_forward</div>",
        prevHtml: "<div class='material-icons date-dropdown__backward' style='color: #BC9CFF'>arrow_backward</div>",

        onRenderCell: function (day, cellType) {
            if (cellType === 'day') {
                return {
                    classes: 'date-dropdown__day',
                }
            }
        },
        onHide: ()=> {
            if (filterDateInput.hasClass("active")) {
                filterDateInput.removeClass("active")
            }
            $(".filter-date-hidden-input").val(filterDatePicker.data("datepicker").selectedDates)
        }
    })
    filterDate = filterDatePicker.data("datepicker")

    //  Full Click Ability

    filterDateExpand.click(function () {
        if(!filterDateInput.hasClass("active")){
            filterDate.show()
            filterDateInput.addClass("active")

        } else {
            filterDate.hide()
            filterDateInput.removeClass("active")
        }
    })

    // Buttons Functions and Styles

    const buttons = $(".filter-date .datepicker--button")

    buttons.toJqArray()[0].html("<button class='borderless-button'>Применить</button>").click(function () {
        filterDate.hide()
        filterDateInput.removeClass("active")
    })
    buttons.toJqArray()[1].html("<button class='borderless-button'>Отчистить</button>")


        // Range Settings

    $(".datepicker").click(function (){
        const inRange = $(".-in-range-")
        const from = $(".-range-from-")
        const to = $(".-range-to-")
        const selected = $(".-selected-")
        inRange.each(function () {
                $(this).append("<span class='datepicker__date-range'></span>")
            }
        )
        if (inRange.length > 0 || selected.length === 2) {
            from.each(function () {
                    $(this).append("<span class='datepicker__date-range_from'></span>")
                }
            )
        }
        to.each(function () {
                $(this).append("<span class='datepicker__date-range_to'></span>")
            }
        )
        if (selected.length < 2 && !(from.length < 1 || to.length < 1)){
            filterDate.clear()
        }
    })

})



