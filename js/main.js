$(document).ready(function(){
    $('.banner_area').mousemove(function(e){
        var wx = $(window).width();
        var wy = $(window).height();
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        var newx = x - wx/2;
        var newy = y - wy/2;
        $('.parallax').each(function(){
            var speed = $(this).attr('data-speed');
            TweenMax.to($(this), 1, {x: (1 - newx*speed), y: (1 - newy*speed)});
        });
    });
    
 
    


    

    switchChart2024();
    $(".year_box").click(function(){
        $(".year_box").removeClass('active');
        $(this).addClass('active');
        let yaer = $(this).find('.year').text();
        switchChart(yaer);
    });
    function switchChart(yaer){
        switch (yaer) {
            case '2020':
                switchChart2020();
                break;
            case '2016':
                switchChart2016();
                break;
            case '2012':
                switchChart2012();
                break;
            default:
                switchChart2024();
        }
    }
    function switchChart2024(){
        $("#vote_rate").text("74.9%");
        $("#vote_valid").text("11,098,642");
        $("#vote_invalid").text("73,256");
        const colors = Highcharts.getOptions().colors,
            categories = [
                '',
            ],
            data = [
                {
                    y: 9.47,
                    color: colors[3],
                    drilldown: {
                        name: '票數',
                        categories: [
                            '已開票數',
                            '尚未開票數'
                        ],
                        data: [
                            74.9,
                            25.1
                        ]
                    }
                }
            ],
            browserData = [],
            versionsData = [],
            dataLen = data.length;
        let i,
            j,
            drillDataLen,
            brightness;
        // Build the data arrays
        for (i = 0; i < dataLen; i += 1) {
            // add data
            drillDataLen = data[i].drilldown.data.length;
            for (j = 0; j < drillDataLen; j += 1) {
                const name = data[i].drilldown.categories[j];
                brightness = 0.2 - (j / drillDataLen) / 5;
                versionsData.push({
                    name,
                    y: data[i].drilldown.data[j],
                    color: Highcharts.color(data[i].color).brighten(brightness).get(),
                    custom: {
                        version: name.split(' ')[1] || name.split(' ')[0]
                    }
                });
            }
        }
        // Create the chart
        Highcharts.chart('piedonut_chart', {
            chart: {
                type: 'pie'
            },
            title: {
                text: '',
                align: 'left'
            },
            subtitle: {
                text: '',
                align: 'left'
            },
            plotOptions: {
                pie: {
                    shadow: false,
                    center: ['50%', '50%']
                }
            },
            tooltip: {
                valueSuffix: '%'
            },
            series: [{
                name: 'Browsers',
                data: browserData,
                size: '45%',
                dataLabels: {
                    color: '#ffffff',
                    distance: '-50%'
                }
            }, {
                name: '票數',
                data: versionsData,
                size: '80%',
                innerSize: '60%',
                dataLabels: {
                    format: '<b>{point.name}:</b> <span style="opacity: 0.5">{y}%</span>',
                    filter: {
                        property: 'y',
                        operator: '>',
                        value: 1
                    },
                    style: {
                        fontWeight: 'normal'
                    }
                },
                id: 'versions'
            }],
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 400
                    },
                    chartOptions: {
                        series: [{
                        }, {
                            id: 'versions',
                            dataLabels: {
                                distance: 10,
                                format: '{point.custom.version}',
                                filter: {
                                    property: 'percentage',
                                    operator: '>',
                                    value: 2
                                }
                            }
                        }]
                    }
                }]
            },
            navigation: {
                buttonOptions: {
                    enabled: false
                }
            },
            credits: {
                enabled: false
            }
        });

        Highcharts.chart('bar_chart', {
            chart: {
                type: 'bar',
            },
            title: {
                text: '',
                align: 'left'
            },
            xAxis: {
                categories: ['喵副慮', '喵景瀾', '喵伊青', '喵商梓'],
                title: {
                    text: null
                },
                gridLineWidth: 1,
                lineWidth: 0
            },
            yAxis: {
                min: 0,
                title: {
                    text: '',
                    align: 'high'
                },
                gridLineWidth: 0
            },
            tooltip: {
                shared: false
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    },
                    groupPadding: 0.1
                }
            },
            series: [{
                name: '得票數',
                data: [4.26, 18.32, 26.29, 51.13],
                tooltip: {
                    valueSuffix: ' %'
                }
            }],
            credits: {
                enabled: false
            },
            navigation: {
                buttonOptions: {
                    enabled: false
                }
            }
        });    
    }
    function switchChart2020(){
        $("#vote_rate").text("74.90%");
        $("#vote_valid").text("14,300,940");
        $("#vote_invalid").text("163,631");

        const colors = Highcharts.getOptions().colors,
            categories = [
                '',
            ],
            data = [
                {
                    y: 9.47,
                    color: colors[3],
                    drilldown: {
                        name: '票數',
                        categories: [
                            '有效票數',
                            '無效票數'
                        ],
                        data: [
                            98.87,
                            1.13
                        ]
                    }
                }
            ],
            browserData = [],
            versionsData = [],
            dataLen = data.length;
        let i,
            j,
            drillDataLen,
            brightness;
        // Build the data arrays
        for (i = 0; i < dataLen; i += 1) {
            // add data
            drillDataLen = data[i].drilldown.data.length;
            for (j = 0; j < drillDataLen; j += 1) {
                const name = data[i].drilldown.categories[j];
                brightness = 0.2 - (j / drillDataLen) / 5;
                versionsData.push({
                    name,
                    y: data[i].drilldown.data[j],
                    color: Highcharts.color(data[i].color).brighten(brightness).get(),
                    custom: {
                        version: name.split(' ')[1] || name.split(' ')[0]
                    }
                });
            }
        }
        // Create the chart
        Highcharts.chart('piedonut_chart', {
            chart: {
                type: 'pie'
            },
            title: {
                text: '',
                align: 'left'
            },
            subtitle: {
                text: '',
                align: 'left'
            },
            plotOptions: {
                pie: {
                    shadow: false,
                    center: ['50%', '50%']
                }
            },
            tooltip: {
                valueSuffix: '%'
            },
            series: [{
                name: 'Browsers',
                data: browserData,
                size: '45%',
                dataLabels: {
                    color: '#ffffff',
                    distance: '-50%'
                }
            }, {
                name: '票數',
                data: versionsData,
                size: '80%',
                innerSize: '60%',
                dataLabels: {
                    format: '<b>{point.name}:</b> <span style="opacity: 0.5">{y}%</span>',
                    filter: {
                        property: 'y',
                        operator: '>',
                        value: 1
                    },
                    style: {
                        fontWeight: 'normal'
                    }
                },
                id: 'versions'
            }],
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 400
                    },
                    chartOptions: {
                        series: [{
                        }, {
                            id: 'versions',
                            dataLabels: {
                                distance: 10,
                                format: '{point.custom.version}',
                                filter: {
                                    property: 'percentage',
                                    operator: '>',
                                    value: 2
                                }
                            }
                        }]
                    }
                }]
            },
            navigation: {
                buttonOptions: {
                    enabled: false
                }
            },
            credits: {
                enabled: false
            }
        });

        Highcharts.chart('bar_chart', {
            chart: {
                type: 'bar',
            },
            title: {
                text: '',
                align: 'left'
            },
            xAxis: {
                categories: ['韓國瑜 / 張善政', '蔡英文 / 賴清德', '宋楚瑜 / 余湘'],
                title: {
                    text: null
                },
                gridLineWidth: 1,
                lineWidth: 0
            },
            yAxis: {
                min: 0,
                title: {
                    text: '',
                    align: 'high'
                },
                gridLineWidth: 0
            },
            tooltip: {
                shared: false
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    },
                    groupPadding: 0.1
                }
            },
            series: [{
                name: '得票數',
                data: [38.61, 57.13, 4.26],
                tooltip: {
                    valueSuffix: ' %'
                }
            }],
            credits: {
                enabled: false
            },
            navigation: {
                buttonOptions: {
                    enabled: false
                }
            }
        });    
    }
    function switchChart2016(){
        $("#vote_rate").text("66.27%");
        $("#vote_valid").text("12,284,970");
        $("#vote_invalid").text("163,332");

        const colors = Highcharts.getOptions().colors,
            categories = [
                '',
            ],
            data = [
                {
                    y: 9.47,
                    color: colors[3],
                    drilldown: {
                        name: '票數',
                        categories: [
                            '有效票數',
                            '無效票數'
                        ],
                        data: [
                            98.69,
                            1.31
                        ]
                    }
                }
            ],
            browserData = [],
            versionsData = [],
            dataLen = data.length;
        let i,
            j,
            drillDataLen,
            brightness;
        // Build the data arrays
        for (i = 0; i < dataLen; i += 1) {
            // add data
            drillDataLen = data[i].drilldown.data.length;
            for (j = 0; j < drillDataLen; j += 1) {
                const name = data[i].drilldown.categories[j];
                brightness = 0.2 - (j / drillDataLen) / 5;
                versionsData.push({
                    name,
                    y: data[i].drilldown.data[j],
                    color: Highcharts.color(data[i].color).brighten(brightness).get(),
                    custom: {
                        version: name.split(' ')[1] || name.split(' ')[0]
                    }
                });
            }
        }
        // Create the chart
        Highcharts.chart('piedonut_chart', {
            chart: {
                type: 'pie'
            },
            title: {
                text: '',
                align: 'left'
            },
            subtitle: {
                text: '',
                align: 'left'
            },
            plotOptions: {
                pie: {
                    shadow: false,
                    center: ['50%', '50%']
                }
            },
            tooltip: {
                valueSuffix: '%'
            },
            series: [{
                name: 'Browsers',
                data: browserData,
                size: '45%',
                dataLabels: {
                    color: '#ffffff',
                    distance: '-50%'
                }
            }, {
                name: '票數',
                data: versionsData,
                size: '80%',
                innerSize: '60%',
                dataLabels: {
                    format: '<b>{point.name}:</b> <span style="opacity: 0.5">{y}%</span>',
                    filter: {
                        property: 'y',
                        operator: '>',
                        value: 1
                    },
                    style: {
                        fontWeight: 'normal'
                    }
                },
                id: 'versions'
            }],
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 400
                    },
                    chartOptions: {
                        series: [{
                        }, {
                            id: 'versions',
                            dataLabels: {
                                distance: 10,
                                format: '{point.custom.version}',
                                filter: {
                                    property: 'percentage',
                                    operator: '>',
                                    value: 2
                                }
                            }
                        }]
                    }
                }]
            },
            navigation: {
                buttonOptions: {
                    enabled: false
                }
            },
            credits: {
                enabled: false
            }
        });

        Highcharts.chart('bar_chart', {
            chart: {
                type: 'bar',
            },
            title: {
                text: '',
                align: 'left'
            },
            xAxis: {
                categories: ['朱立倫 / 王如玄', '蔡英文 / 陳建仁', '宋楚瑜 / 徐欣瑩'],
                title: {
                    text: null
                },
                gridLineWidth: 1,
                lineWidth: 0
            },
            yAxis: {
                min: 0,
                title: {
                    text: '',
                    align: 'high'
                },
                gridLineWidth: 0
            },
            tooltip: {
                shared: false
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    },
                    groupPadding: 0.1
                }
            },
            series: [{
                name: '得票數',
                data: [31.04, 56.12, 12.83],
                tooltip: {
                    valueSuffix: ' %'
                }
            }],
            credits: {
                enabled: false
            },
            navigation: {
                buttonOptions: {
                    enabled: false
                }
            }
        });    
    }
    function switchChart2012(){
        $("#vote_rate").text("74.38%");
        $("#vote_valid").text("13,354,305");
        $("#vote_invalid").text("97,711");

        const colors = Highcharts.getOptions().colors,
            categories = [
                '',
            ],
            data = [
                {
                    y: 9.47,
                    color: colors[3],
                    drilldown: {
                        name: '票數',
                        categories: [
                            '有效票數',
                            '無效票數'
                        ],
                        data: [
                            99.27,
                            0.73
                        ]
                    }
                }
            ],
            browserData = [],
            versionsData = [],
            dataLen = data.length;
        let i,
            j,
            drillDataLen,
            brightness;
        // Build the data arrays
        for (i = 0; i < dataLen; i += 1) {
            // add data
            drillDataLen = data[i].drilldown.data.length;
            for (j = 0; j < drillDataLen; j += 1) {
                const name = data[i].drilldown.categories[j];
                brightness = 0.2 - (j / drillDataLen) / 5;
                versionsData.push({
                    name,
                    y: data[i].drilldown.data[j],
                    color: Highcharts.color(data[i].color).brighten(brightness).get(),
                    custom: {
                        version: name.split(' ')[1] || name.split(' ')[0]
                    }
                });
            }
        }
        // Create the chart
        Highcharts.chart('piedonut_chart', {
            chart: {
                type: 'pie'
            },
            title: {
                text: '',
                align: 'left'
            },
            subtitle: {
                text: '',
                align: 'left'
            },
            plotOptions: {
                pie: {
                    shadow: false,
                    center: ['50%', '50%']
                }
            },
            tooltip: {
                valueSuffix: '%'
            },
            series: [{
                name: 'Browsers',
                data: browserData,
                size: '45%',
                dataLabels: {
                    color: '#ffffff',
                    distance: '-50%'
                }
            }, {
                name: '票數',
                data: versionsData,
                size: '80%',
                innerSize: '60%',
                dataLabels: {
                    format: '<b>{point.name}:</b> <span style="opacity: 0.5">{y}%</span>',
                    filter: {
                        property: 'y',
                        operator: '>',
                        value: 1
                    },
                    style: {
                        fontWeight: 'normal'
                    }
                },
                id: 'versions'
            }],
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 400
                    },
                    chartOptions: {
                        series: [{
                        }, {
                            id: 'versions',
                            dataLabels: {
                                distance: 10,
                                format: '{point.custom.version}',
                                filter: {
                                    property: 'percentage',
                                    operator: '>',
                                    value: 2
                                }
                            }
                        }]
                    }
                }]
            },
            navigation: {
                buttonOptions: {
                    enabled: false
                }
            },
            credits: {
                enabled: false
            }
        });

        Highcharts.chart('bar_chart', {
            chart: {
                type: 'bar',
            },
            title: {
                text: '',
                align: 'left'
            },
            xAxis: {
                categories: ['馬英九 / 吳敦義', '蔡英文 / 蘇嘉全', '宋楚瑜 / 林瑞雄'],
                title: {
                    text: null
                },
                gridLineWidth: 1,
                lineWidth: 0
            },
            yAxis: {
                min: 0,
                title: {
                    text: '',
                    align: 'high'
                },
                gridLineWidth: 0
            },
            tooltip: {
                shared: false
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    },
                    groupPadding: 0.1
                }
            },
            series: [{
                name: '得票數',
                data: [51.6, 45.63, 2.76],
                tooltip: {
                    valueSuffix: ' %'
                }
            }],
            credits: {
                enabled: false
            },
            navigation: {
                buttonOptions: {
                    enabled: false
                }
            }
        });    
    }



    Highcharts.chart('mix_chart', {
        chart: {
            // type: 'column',
            zoomType: 'xy'
        },
        title: {
            text: '',
            align: 'left'
        },
        xAxis: {
            categories: [1996, 2000, 2004, 2008, 2012, 2016, 2020],
            crosshair: true,
            accessibility: {
                description: ''
            }
        },
        yAxis: [{
            min: 0,
            max: 100,
            title: {
                text: ''
            }
        }, { // Secondary yAxis
            gridLineWidth: 0,
            title: {
                text: '投票率',
                style: {
                    color: Highcharts.getOptions().colors[4],
                    fontWeight: 800
                }
            },
            labels: {
                format: '{value} %',
                style: {
                    color: Highcharts.getOptions().colors[4]
                }
            }
        }],
        tooltip: {
            valueSuffix: '%',
            shared: false
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [
            {
                name: '國民黨',
                type: 'column',
                yAxis: 0,
                data: [54, 23.1, 49.89, 58.44, 51.6, 31.04, 38.61],
                tooltip: {
                    valueSuffix: ' %'
                }
            },
            {
                name: '民進黨',
                type: 'column',
                yAxis: 0,
                data: [21.13, 39.3, 50.11, 41.55, 45.63, 56.12, 57.13],
                tooltip: {
                    valueSuffix: ' %'
                }
            },
            {
                name: '親民黨',
                type: 'column',
                yAxis: 0,
                data: [0, 0, 0, 0, 0, 12.83, 4.26],
                tooltip: {
                    valueSuffix: ' %'
                }
            },
            {
                name: '其他',
                type: 'column',
                yAxis: 0,
                data: [9.98, 37.6, 0, 0, 2.76, 0, 0],
                tooltip: {
                    valueSuffix: ' %'
                }
            },
            {
                name: '投票率',
                type: 'spline',
                yAxis: 1,
                data: [74.90, 66.27, 74.38, 76.33, 80.28, 82.69, 76.04],
                tooltip: {
                    valueSuffix: ' %'
                }
            },
        ],
        navigation: {
            buttonOptions: {
                enabled: false
            }
        },
        credits: {
            enabled: false
        }
    });


    (async () => {
        const topology = await fetch(
        'https://code.highcharts.com/mapdata/countries/tw/tw-all.topo.json'
        ).then(response => response.json());

        // Prepare demo data. The data is joined to map using value of 'hc-key'
        // property by default. See API docs for 'joinBy' for more info on linking
        // data and map.
        const data = [
            ['tw-pt', 10],
            ['tw-tn', 11],
            ['tw-il', 12],
            ['tw-ch', 13],
            ['tw-tt', 14],
            ['tw-ph', 15],
            ['tw-km', 16],
            ['tw-lk', 17],
            ['tw-tw', 18],
            ['tw-cs', 19],
            ['tw-th', 20],
            ['tw-yl', 21],
            ['tw-kh', 22],
            ['tw-tp', 23],
            ['tw-hs', 24],
            ['tw-hh', 25],
            ['tw-cl', 26],
            ['tw-ml', 27],
            ['tw-ty', 28],
            ['tw-cg', 29],
            ['tw-hl', 30],
            ['tw-nt', 31]
        ];

        // Create the chart
        Highcharts.mapChart('map_tw', {
            chart: {
                map: topology
            },
            title: {
                text: ''
            },
            subtitle: {
                text: ''
            },
            mapNavigation: {
                enabled: true,
                buttonOptions: {
                verticalAlign: 'bottom'
                }
            },
            colorAxis: {
                min: 0
            },
            series: [{
                data: data,
                name: '',
                states: {
                    hover: {
                        color: '#BADA55'
                }
                },
                dataLabels: {
                    enabled: false,
                    format: '{point.name}'
                }
            }],
            navigation: {
                buttonOptions: {
                    enabled: false
                }
            },
            credits: {
                enabled: false
            }
        });
    })();
});