require("air-datepicker")
require("air-datepicker/dist/css/datepicker.css")
require("air-datepicker/dist/js/datepicker")
$(document).ready(function () {
    if ($("[data-filter-date-input]").length) {
        const filterDateInput = $("[data-filter-date-input]")
        const myFilterDate = filterDateInput.datepicker({
            classes: "filter-date",
            // inline: true,
            keyboardNav: true,
            clearButton: true,
            offset: 5,
            range: true,
            multipleDatesSeparator: " - ",
            dateFormat: "dd M",
            todayButton: true,
            disableNavWhenOutOfRange: false,
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

            onHide: () => {
                filterDateInput.removeClass("active")
                if (filterDate.selectedDates.length >= 1) {
                    let date = `${filterDate.selectedDates[0].toLocaleDateString()}, ${filterDate.selectedDates[1].toLocaleDateString()}`
                    $("[data-filter-date-hidden-input]").attr('value', date);
                }
            }
        })

        const filterDate = myFilterDate.data("datepicker")

        // Buttons Functions and Styles
                const confirmBtn = $("[data-action=today]")
                const clearBtn = $("[data-action=clear]")
                confirmBtn.html("<button class='borderless-button'>Применить</button>")
                clearBtn.html("<button class='borderless-button'>Отчистить</button>")
                clearBtn.click(function () {
                    filterDate.clear()
                    filterDateInput.val("")

                })
                confirmBtn.click(function () {
                    filterDate.hide()
                })

        // Open Close

        filterDateInput.click(function () {
            if(!filterDateInput.hasClass("active")){
                filterDate.show()
                filterDateInput.addClass("active")
            }
        })

        // Range Settings

        $(".datepicker").click(function () {
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
            if (selected.length < 2 && !(from.length < 1 || to.length < 1) || selected.length === 0) {
                $(".datepicker__date-range").remove()
                $(".datepicker__date-range_from").remove()
                $(".datepicker__date-range_to").remove()
            }
        })
    }
})



