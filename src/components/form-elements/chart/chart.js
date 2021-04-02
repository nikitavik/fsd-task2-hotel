import Chart from "chart.js"

$(document).ready(function () {
    const ctx = $("[data-chart]")

    const myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [50, 25, 25, 0],
                backgroundColor: [
                    "#FFE39C",
                    "#6FCF97",
                    "#BC9CFF",
                    "#919191"
                ],


            }],
            labels: [
                'Великолепно',
                'Хорошо',
                "Удовлетворительно",
                'Разочарован'
            ],

        },
        options: {
            legend: false,
            hover: {},
            cutoutPercentage: 90
        }

    })
})
