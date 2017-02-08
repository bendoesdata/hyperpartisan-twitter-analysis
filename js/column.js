$(function () {
    Highcharts.chart('columnChart', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Hyperpartisan Follower Count'
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: [
							'UsUncut',
							'OccupyDemocrats',
							'DailyKos',
							'MotherJones',
							'thinkprogress',
							'TheBlaze',
							'BreitbartNews',
							'RedState',
							'ChicksOnRight',
							'realDailyWire'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: ''
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:14px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0; font-size: 12px">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
          series: {
                color: '#7CB5EC'
            },
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [ {
            name: 'Followers',
            data: [19600, 229000, 239000, 662000, 688000, 605000, 566000, 188000, 38400, 28500]

        }]
    });
});
