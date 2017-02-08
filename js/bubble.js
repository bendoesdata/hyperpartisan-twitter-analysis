'use strict';
//import Highcharts from '../parts/Globals.js';
/* global document */
// Load the fonts
Highcharts.createElement('link', {
   href: 'https://fonts.googleapis.com/css?family=Signika:400,700',
   rel: 'stylesheet',
   type: 'text/css'
}, null, document.getElementsByTagName('head')[0]);

// Add the background image to the container
Highcharts.wrap(Highcharts.Chart.prototype, 'getContainer', function (proceed) {
   proceed.call(this);
   this.container.style.background = 'url(http://www.highcharts.com/samples/graphics/sand.png)';
});


Highcharts.theme = {
   colors: ['#f45b5b', '#8085e9', '#8d4654', '#7798BF', '#aaeeee', '#ff0066', '#eeaaee',
      '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
   chart: {
      backgroundColor: null,
      style: {
         fontFamily: 'Signika, serif'
      }
   },
   title: {
      style: {
         color: 'black',
         fontSize: '16px',
         fontWeight: 'bold'
      }
   },
   subtitle: {
      style: {
         color: 'black'
      }
   },
   tooltip: {
      borderWidth: 0
   },
   legend: {
      itemStyle: {
         fontWeight: 'bold',
         fontSize: '13px'
      }
   },
   xAxis: {
      labels: {
         style: {
            color: '#6e6e70'
         }
      }
   },
   yAxis: {
      labels: {
         style: {
            color: '#6e6e70'
         }
      }
   },
   plotOptions: {
      series: {
         shadow: true
      },
      candlestick: {
         lineColor: '#404048'
      },
      map: {
         shadow: false
      }
   },

   // Highstock specific
   navigator: {
      xAxis: {
         gridLineColor: '#D0D0D8'
      }
   },
   rangeSelector: {
      buttonTheme: {
         fill: 'white',
         stroke: '#C0C0C8',
         'stroke-width': 1,
         states: {
            select: {
               fill: '#D0D0D8'
            }
         }
      }
   },
   scrollbar: {
      trackBorderColor: '#C0C0C8'
   },

   // General
   background2: '#E0E0E8'

};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);

$(function () {
    Highcharts.chart('container', {

        chart: {
            type: 'bubble',
            plotBorderWidth: 1,
            zoomType: 'xy'
        },

        legend: {
            enabled: false
        },

        title: {
            text: "The weekend's top tweeters, by follower count"
        },

        subtitle: {
            text: '<Source:>OECD</a>'
        },

        xAxis: {
            gridLineWidth: 1,
            title: {
                text: 'Tweets over 3 days'
            },
            labels: {
                format: ''
            },
        },

        yAxis: {
            startOnTick: false,
            endOnTick: false,
            title: {
                text: 'Follower Count'
            },
            labels: {
                format: ''
            },
            maxPadding: 0.2,

        },

        tooltip: {
            useHTML: true,
            headerFormat: '<table>',
            pointFormat: '<tr><th colspan="2"><h3>{point.name}</h3></th></tr>' +
                '<tr><th>Tweets:</th><td>{point.x}</td></tr>' +
                '<tr><th>Followers:</th><td>{point.y}</td></tr>',
            footerFormat: '</table>',
            followPointer: true
        },

        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    padding: 0,
                    allowOverlap: false,
                    format: '{point.name}',
                    formatter: function() {
                      return this.point.name;
                    }
                }
            }

        },

        series: [{
            data: [

{ x: 196, y: 1291,  z: 1291,  name: 'music2c', color: 'gray' },
{ x: 175, y: 128,  z: 128,  name: 'sox_morgan', color: 'gray' },
{ x: 150, y: 28500,  z: 28500,  name: 'realDailyWire', color: 'rgba(206, 0, 0, 0.5)'},
{ x: 150, y: 229000,  z: 229000,  name: 'OccupyDemocrats', color: 'rgba(0, 20, 247, 0.5)' },
{ x: 145, y: 566000,  z: 566000,  name: 'BreitbartNews', color: 'rgba(206, 0, 0, 0.5)' },
{ x: 132, y: 701,  z: 701,  name: 'warriorfema6', color: 'gray' },
{ x: 130, y: 688000,  z: 688000,  name: 'thinkprogress', color:  'rgba(0, 20, 247, 0.5)'},
{ x: 129, y: 806,  z: 806,  name: 'TrumpysTaxes', color: 'gray' },
{ x: 128, y: 662000,  z: 662000,  name: 'MotherJones', color:  'rgba(0, 20, 247, 0.5)' },
{ x: 127, y: 788,  z: 788,  name: 'JoachimPeiper8', color: 'gray' },
{ x: 116, y: 605000,  z: 605000,  name: 'theblaze', color:  'rgba(206, 0, 0, 0.5)'},
{ x: 106, y: 38400,  z: 38400,  name: 'chicksonright', color:  'rgba(206, 0, 0, 0.5)' },
{ x: 99, y: 188000,  z: 188000,  name: 'RedState', color:  'rgba(206, 0, 0, 0.5)' },
{ x: 12, y: 19600,  z: 19600,  name: 'USUncut', color:  'rgba(0, 20, 247, 0.5)' },
{ x: 92, y: 239000,  z: 239000,  name: 'dailykos', color:  'rgba(0, 20, 247, 0.5)'},

            ]

        }]

    });

});
