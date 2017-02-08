$(function () {
    Highcharts.chart('pieChart', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Ratio of original tweets to retweets'
        },
        tooltip: {
            pointFormat: '<p style="font-size: 18px">{point.y}</p>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b style="font-size:14px">{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: ' ',
            colorByPoint: true,
            data: [{
                name: 'Retweets',
                y: 47016
            }, {
                name: 'Original tweets',
                y: 18067,
                sliced: true,
                selected: true
            }]
        }]
    });
});
