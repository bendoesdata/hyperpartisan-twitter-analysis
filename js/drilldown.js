$(function () {
    // Create the chart
    Highcharts.chart('drilldown', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Most retweeted tweets, by account'
        },
        subtitle: {
            text: 'Click the columns to view top 10 most popular tweets for each publisher.'
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'Total percent market share'
            }

        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '{point.y}'
                }
            }
        },
        colors: [
                //left-wing
                '#eff3ff',
                '#bdd7e7',
                '#6baed6',
                '#2171b5',

                //right-wing
                '#cb181d',
                '#fb6a4a',
                '#fcae91',
                '#fee5d9'
            ],

        tooltip: {
            useHTML: true,
            headerFormat: '<span style="font-size:16px">{series.name}</span><br>',
            pointFormat: '<div style="width: 350px; word-break: break-all; word-wrap: break-word;"><b style="font-size: 16px">{point.y}</b> retweets<br/><span style="font-size: 12px"><br />{point.name}</span><br /></div>'
        },

        series: [{
            name: 'Total',
            colorByPoint: true,
            data: [ {
                name: 'OccupyDemocrats',
                y: 1825,
                drilldown: 'OccupyDemocrats'
            },  {
                name: 'dailykos',
                y: 3577,
                drilldown: 'dailykos'
            },  {
                name: 'thinkprogress',
                y: 4690,
                drilldown: 'thinkprogress'
            }, {
                name: 'MotherJones',
                y: 5663,
                drilldown: 'MotherJones'
            },  {
                name: 'BreitbartNews',
                y: 19677,
                drilldown: 'BreitbartNews'
            }, {
                name: 'theBlaze',
                y: 2722,
                drilldown: 'theBlaze'
            }, {
                name: 'RedState',
                y: 177,
                drilldown: 'RedState'
            }, {
                name: 'realDailyWire',
                y: 32,
                drilldown: 'realDailyWire'
            },

          ]
        }],
        drilldown: {
            series: [{
                name: 'thinkprogress',
                id: 'thinkprogress',
                data: [

[ "RT @thinkprogress: Bipartisan group of Electoral College members want<br /> an intel briefing before they vote<br /> https://t.co/5H9bKs0blK", 91 ],
[ "RT @thinkprogress: Bipartisan group of Electoral College members want<br /> an intel briefing before they vote<br /> https://t.co/5H9bKs0blK https://t.â", 65 ],
[ "RT @thinkprogress: Black lives matter to Trump when they don't turn out<br /> to vote https://t.co/hQfrm9H2AR https://t.co/L4nycCMZXd", 40 ],
[ "RT @thinkprogress: Carrier says it will spend millions automating<br /> Indiana plant, plans to lay off workers <br />Trump saved ", 335 ],
[ "RT @thinkprogress: Comet employee on life during 'Pizzagate': 'If this doesn't<br /> stop someone is going to get killed ", 25 ],
[ "RT @thinkprogress: Democrats may already be blowing the 2020 <br />redistricting fight https://t.co/ikzNY3Yx9L", 27 ],
[ "RT @thinkprogress: Donald Trump confirms he will violate Constitution his<br /> first day in office https://t.co/q8Koawk4h4 https://t.co/klZwDtMiâ", 83 ],
[ "RT @thinkprogress: Donald Trump confirms he will violate the Constitution<br /> on his first day in office: https://t.co/gyR3bA9wrt", 173 ],
[ "RT @thinkprogress: Fake news isn't all Facebook's fault. Sprawling digital <br />media made it worse. https://t.co/zftCvUljFS https://t.co/8L1unZâ", 24 ],
[ "RT @thinkprogress: Fossil fuel executives, Republicans celebrate<br /> Trump's EPA nominee https://t.co/6ZgpmgCkND https://t.co/0QaqajOvKq", 26 ],


                ]
            }, {
                name: 'MotherJones',
                id: 'MotherJones',
                data: [

  [ "RT @MotherJones: 'I didn't come here to lose': How a movement <br />was born at Standing Rock<br /> https://t.co/ncdwvL8ph9", 50 ],
  [ "RT @MotherJones: A guide to Donald Trump's huge debts and the<br /> conflicts they present <br />https://t.co/c2Ucm1T0RP", 89 ],
  [ "RT @MotherJones: A Guide To Donald Trump's Huge Debts and the<br /> Conflicts They Present <br />https://t.co/RMHLLljWF5", 160 ],
  [ "RT @MotherJones: A veteran spy gave the FBI information alleging<br /> a Russian operation to cultivate Donald Trump <br />https://t.co/NYRQbzgRI4", 185 ],
  [ "RT @MotherJones: Bipartisan group raises red flags about <br />Trump's conflicts of interest <br />https://t.co/oYEuGaPMCu", 88 ],
  [ "RT @MotherJones: Bipartisan Group Raises Red Flags About <br />Trump's Conflicts of Interest <br />https://t.co/W11aJv2lRU", 69 ],
  [ "RT @MotherJones: Bipartisan group raises red flags about <br />Trump's conflicts of interest <br />https://t.co/WtlCm1tF4K", 138 ],
  [ "RT @MotherJones: Bipartisan group raises red flags about <br />Trump's conflicts of interest <br />https://t.co/yFwfPRN7x3 https://t.co/x0UsYGfLJF", 98 ],
  [ "RT @MotherJones: Bipartisan group raises red flags about <br />Trump's conflicts of interest. <br />https://t.co/W11aJv2lRU", 90 ],
  [ "RT @MotherJones: California Is About to Funnel Water to <br />Farms, While Screwing the Ecosystems Around Them... <br />https://t.co/ULkHjIrQV1 https://â€¦", 38 ],


                ]
            }, {
                name: 'dailykos',
                id: 'dailykos',
                data: [
                  [ "RT @dailykos: A president can destroy a private citizen <br />by targeting them, but Trump doesn't care<br /> https://t.co/f595ojxsQL", 45 ],
    [ "RT @dailykos: Abbreviated Pundit Round-up: The Trump appointments <br />continue to suggest inexperience/incompetence<br /> https://t.co/ccbNaGSZqr", 34 ],
    [ '"RT @dailykos: As Trump again attacks CIA, former intelligence <br />officers expect retaliation against the agency<br /> https://t.co/UcIf6JhOuP"', 80 ],
    [ "RT @dailykos: Be happy for coal miners losing their health insurance. <br />They're getting exactly what they voted for<br /> https://t.co/ABoH3HCQoC", 68 ],
    [ 'RT @dailykos: Before Elvis and Janis there was<br /> Big Mama Thornton https://t.co/8artsfWDZF', 27 ],
    [ 'RT @dailykos: California: the Golden State for <br />women and for Democrats https://t.co/SLMaS8p1hk', 24 ],
    [ "RT @dailykos: Cartoon: Republicans' safety net cuts<br /> https://t.co/NfsARiatSK", 33 ],
    [ "RT @dailykos: Citing 'grave threats' to security, Republicans <br />join effort to investigate Russian interference<br /> https://t.co/F22stUf97l", 132 ],
    [ 'RT @dailykos: Clinton campaign backs call for intelligence briefing<br /> ahead of electoral college vote<br /> https://t.co/RcX0PNvbnS', 52 ],
    [ "RT @dailykos: Clinton communications director still pressing <br />Trump's team to own its embrace of white supremacy<br /> https://t.co/Ea0lRI0Fik", 46 ],

                ]
            }, {
                name: 'OccupyDemocrats',
                id: 'OccupyDemocrats',
                data: [
                  [ "RT @OccupyDemocrats: #Breaking News: An Ex-CIA Officer <br />Just Called For An Election Redo Over Russian Interference<br /> (VIDEO) https://t.co/Wzegâ", 44 ],
                  [ "RT @OccupyDemocrats: #Breaking News: Dan Rather Just Called <br />Out Fake 'Patriots' Who Support Trump's Putin Romance <br />In Viral Post https://t.câ", 68 ],
                  [ "RT @OccupyDemocrats: #Breaking News: Electors Just Demanded<br /> An Intel Briefing On Russian Interference Before <br />Vote https://t.co/avj0W5rIpU", 33 ],
                  [ "RT @OccupyDemocrats: #Breaking News: Electors Just Filed <br />A Lawsuit To Allow The Electoral College To Vote Against Trump<br /> https://t.co/56XMcaâ", 58 ],
                  [ "RT @OccupyDemocrats: #Breaking News: FOX Just Asked Trump <br />Why He Skips Intelligence Briefings. His Answer Is Terrifying<br /> https://t.co/Q6Ebvwâ", 39 ],
                  [ "RT @OccupyDemocrats: #Breaking News: FOX Just Called Out <br />Trump For His â€œPay For Playâ€ Hypocrisy To His Face<br /> https://t.co/p0zH70qBaK", 70 ],
                  [ "RT @OccupyDemocrats: #Breaking News: Hillary Tried To Warn <br />Us About Russia, But Men On Debate Stage Interrupted <br />(VIDEO) https://t.co/MhSxBXâ", 57 ],
                  [ "RT @OccupyDemocrats: #Breaking News: Obama Just Launched <br />An Investigation Into Russiaâ€™s Pro-Trump Hacks<br /> https://t.co/RAjNmKGiqf", 33 ],
                  [ "RT @OccupyDemocrats: #Breaking News: Officials: Hillary <br />Campaign Suffered Massive Russian Cyberattack Days Before <br />Election https://t.co/Gpwâ", 32 ],
                  [ "RT @OccupyDemocrats: #Breaking News: POLITIFACT: Trump Is Lying, <br />Russia DID Swing Election In His Favor <br />https://t.co/qMAceQnuCd", 50 ],


                ]
            }, {
                name: 'realDailyWire',
                id: 'realDailyWire',
                data: [
                    [
                        'RT @realDailyWire: Timely words from <br />Benjamin Franklin. https://t.co/BVjbY3qqNG',
                        32
                    ]

                ]
            }, {
                name: 'RedState',
                id: 'RedState',
                data: [
                  [ "RT @RedState: BREAKING: Louisiana Gives Republican John Kennedy <br />Last Senate Seat of 2016<br /> https://t.co/JmWEN94m3V", 54 ],
                  [ "RT @RedState: Idaho Planned Parenthood Suing Pro-Life Pregnancy <br />Center Neighbors for Providing Healthcare<br /> https://t.co/3wt8pSohMs", 25 ],
                  [ "RT @RedState: Sean Hannity Strips Away Any Prior Denials of <br />Alt-Right Involvement <br />https://t.co/y6Bscq0ABf", 68 ],
                  [ "RT @RedState: Still Waiting for the Democrats to Apologize to <br />Romney About That Whole Russia Thing<br /> https://t.co/LY4TLlB8nA", 30 ],

                ]
            }, {
                name: 'theBlaze',
                id: 'theBlaze',
                data: [

[ "RT @theblaze: @TomiLahren has a message for #Democrats <br />worried about @realDonaldTrump and his <br />cabinet choices https://t.co/O8iHshl8hz.", 27 ],
[ "RT @theblaze: 94-year-old WWII vet beaten up over <br />her purse on Pearl Harbor Day. ''Coward' <br />still on loose. “ TheBlaze - https://t.co/J8mTD7qâ", 71 ],
[ "RT @theblaze: 'Fake news': MSNBC anchor tells a whopper<br /> about Fox News “ TheBlaze - https://t.co/OxFxzVYKdE", 49 ],
[ "RT @theblaze: What's your source?: Reince Priebus <br />confronts NBC's Chuck Todd over false<br /> election hacking story https://t.co/1Tdz6HXCdW", 95 ],
[ "RT @theblaze: ACLU sues Indiana town over cross atop<br /> Christmas tree and residents respond <br />in defiant fashion “ TheBlaze - https://t.co/zVâ", 45 ],
[ "RT @theblaze: Army beats Navy in annual football game<br /> after 14-year losing streak<br /> https://t.co/Ce0fhWYXdo", 27 ],
[ "RT @theblaze: Bombing of Coptic Christian cathedral <br />in Egypt leads to at least 25 deaths, <br />another 49 wounded https://t.co/9Iih8Gr6QO", 70 ],
[ "RT @theblaze: CDC reports the life expectancy of Americans<br /> has dropped for the first time in <br />years. Thanks 2016! ", 25 ],
[ "RT @theblaze: College professor calls cops because student<br /> wearing police uniform made classmates <br />'uncomfortable' ", 57 ],
[ "RT @theblaze: Democratic ex-Rep. Chaka Fattah sentenced<br /> to 10 years in prison “ TheBlaze - https://t.co/BA0jtUEVTE", 33 ],


                ]
            }, {
                name: 'BreitbartNews',
                id: 'BreitbartNews',
                data: [
[ '<img width="350px" src="images/breitbart1.png" />', 568 ],
[ '<img width="350px" src="images/breitbart2.png" />', 478 ],
[ '<img width="350px" src="images/breitbart3.png" />', 473 ],
[ '<img width="350px" src="images/breitbart4.png" />', 461 ],
[ '<img width="350px" src="images/breitbart5.png" />', 439 ],
[ '<img width="350px" src="images/breitbart6.png" />', 414 ],
[ '<img width="350px" src="images/breitbart7.png" />', 369 ],
[ '<img width="350px" src="images/breitbart8.png" />', 342 ],
[ '<img width="350px" src="images/breitbart9.png" />', 336 ],
[ '<img width="350px" src="images/breitbart10.png" />', 310 ],


                ]
            }

          ]
        }
    });
});
