require("webpack-jquery-ui")
// require("webpack-jquery-ui/css")
$(document).ready(function (){
    const outputValues = $(".range-slider__values")
    const sliderElement = $(".range-slider__slider")

    sliderElement.slider({
        animate: "slow",
        step: 100,
        range: true,
        min: 0,
        max: 10000,
        values: [1000, 5000],
        slide: function (event, ui) {
            outputValues.html(ui.values[0] + " ₽" + ' - ' + ui.values[1] + " ₽")
        }
      })
    outputValues.html(sliderElement.slider('values', 0) + " ₽" + " - " + sliderElement.slider('values', 1) + " ₽")
})