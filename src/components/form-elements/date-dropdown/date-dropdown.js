// require("air-datepicker");
// require("air-datepicker/dist/css/datepicker.css");
// require("air-datepicker/dist/js/datepicker");
// $(document).ready(function() {
//   if ($("[data-date-dropdown-input]").length) {
//     const dateInput = $("[data-date-dropdown-input]");
//     const dateAltInput = $("[data-date-dropdown-alt-input]");
//     const dropdownField = $("[data-date-dropdown]");
//
//     const myDropdown = dateInput.datepicker({
//       // inline: true,
//       classes: "date-drop",
//       keyboardNav: true,
//       clearButton: true,
//       offset: 5,
//       range: true,
//       multipleDatesSeparator: "",
//       dateFormat: "dd.mm.yyyy",
//       todayButton: true,
//       disableNavWhenOutOfRange: false,
//       minDate: new Date(),
//       nextHtml: "<div class='material-icons date-dropdown__forward' style='color: #BC9CFF'>arrow_forward</div>",
//       prevHtml: "<div class='material-icons date-dropdown__backward' style='color: #BC9CFF'>arrow_backward</div>",
//
//       onRenderCell: function(day, cellType) {
//         if (cellType === "day") {
//           return {
//             classes: "date-dropdown__day",
//           };
//         }
//       },
//
//       onSelect: ()=>{
//         if (dropdownDate.selectedDates.length >= 2) {
//           const date1 = dropdownDate.selectedDates[0].toLocaleDateString();
//           const date2 = dropdownDate.selectedDates[1].toLocaleDateString();
//           dateInput.val(`${date1}`);
//           dateAltInput.val(date2);
//         }
//       },
//       onHide: ()=> {
//         dropdownField.removeClass("active");
//         if (dropdownDate.selectedDates.length === 2) {
//           const date1 = dropdownDate.selectedDates[0].toLocaleDateString();
//           const date2 = dropdownDate.selectedDates[1].toLocaleDateString();
//           dateInput.attr("value", date1);
//           dateAltInput.attr("value", date2);
//         }
//       },
//     });
//
//     const dropdownDate = myDropdown.data("datepicker");
//
//
//     // Buttons Functions and Styles
//     const confirmBtn = $("[data-action=today]");
//     const clearBtn = $("[data-action=clear]");
//     confirmBtn.html("<button class='borderless-button'>Применить</button>");
//     clearBtn.html("<button class='borderless-button'>Отчистить</button>");
//     clearBtn.click(function() {
//       dropdownDate.clear();
//       dateAltInput.val("");
//     });
//     confirmBtn.click(function() {
//       dropdownDate.hide();
//     });
//
//     // Open Close
//     dropdownField.click(function() {
//       if (!dropdownField.hasClass("active")) {
//         dropdownDate.show();
//         dropdownField.addClass("active");
//       }
//     });
//
//
//     // Range settings
//     $(".datepicker").click(function() {
//       const inRange = $(".-in-range-");
//       const from = $(".-range-from-");
//       const to = $(".-range-to-");
//       const selected = $(".-selected-");
//       inRange.each(function() {
//         $(this).append("<span class='datepicker__date-range'></span>");
//       }
//       );
//       if (inRange.length > 0 || selected.length === 2) {
//         from.each(function() {
//           $(this).append("<span class='datepicker__date-range_from'></span>");
//         }
//         );
//       }
//       to.each(function() {
//         $(this).append("<span class='datepicker__date-range_to'></span>");
//       }
//       );
//       if (selected.length !== 2 && !(from.length < 1 || to.length < 1) || selected.length === 0) {
//         $(".datepicker__date-range").remove();
//         $(".datepicker__date-range_from").remove();
//         $(".datepicker__date-range_to").remove();
//       }
//       if (dropdownDate.selectedDates.length === 1) {
//         dateAltInput.val("");
//       }
//     });
//   }
// });
