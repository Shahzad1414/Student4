$(document).ready(function() {
    var dom = document.getElementById("linechart");
    var myChart = echarts.init(dom);
    var app = {};

    var option;

    $.ajax({

        dataType: "json",
        url: "http://webapi19sa-1.course.tamk.cloud/v1/weather/rain",
        type: 'GET',
        success: function(data) {
            $("#content_1 #View4Tbl").empty();

            let tab =
                `<tr>
                    <th>Row_Number</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Measurement_Type</th>
                    <th>Value</th>
                </tr>`;
            let count = 0;
            for (let r of data) {

                count = count + 1;
                if (count <= 20) {
                    tab += `<tr> 
                    <td>${count} </td>
                    <td>${r.date_time.slice(0,10)}</td> 
                    <td>${r.date_time.slice(11,19)}</td>
                    <td>Rain</td>
                    <td>${r.rain}</td>
                            
                </tr>`;

                    option = {
                        xAxis: {
                            type: 'category',
                            data: data.map(item => item.date_time.slice(11, 19))
                                // [r.date_time.slice(11, 19)]
                        },
                        yAxis: {
                            type: 'value'
                        },
                        series: [{
                            data: data.map(item => item.rain),
                            type: 'line'
                        }]
                    };

                    if (option && typeof option === 'object') {
                        myChart.setOption(option);
                    }
                }


            }
            tablebody = $("#content_1 #View4Tbl");
            tablebody.append(tab);
        }
    });
    $('#Measurements').change(function() {

        $("#content_1 #View4Tbl").html("");
        var measurments = $('#Measurements').find(":selected").text();

        if (measurments == "rain") {
            $('#timeinterval').change(function() {
                var timeinterval = $('#timeinterval').find(":selected").text();

                if (timeinterval == "Now") {

                    $.ajax({

                        dataType: "json",
                        url: "http://webapi19sa-1.course.tamk.cloud/v1/weather/rain",
                        type: 'GET',
                        success: function(data) {
                            $("#content_1 #View4Tbl").empty();

                            let tab =
                                `<tr>
                                    <th>Row_Number</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Measurement_Type</th>
                                    <th>Value</th>
                                </tr>`;
                            let count = 0;
                            for (let r of data) {

                                count = count + 1;
                                if (count <= 20) {
                                    tab += `<tr> 
                                    <td>${count} </td>
                                    <td>${r.date_time.slice(0,10)}</td> 
                                    <td>${r.date_time.slice(11,19)}</td>
                                    <td>Rain</td>
                                    <td>${r.rain}</td>
                                            
                                </tr>`;

                                    option = {

                                        grid: { containLabel: true },
                                        xAxis: { name: 'amount' },
                                        yAxis: { type: 'category' },
                                        visualMap: {
                                            orient: 'horizontal',
                                            left: 'center',
                                            min: 10,
                                            max: 100,
                                            text: ['High Score', 'Low Score'],
                                            // Map the score column to color
                                            dimension: 0,
                                            inRange: {
                                                color: ['#65B581', '#FFCE34', '#FD665F']
                                            }
                                        },
                                        series: [{
                                            type: 'bar',
                                            encode: {
                                                // Map the "amount" column to X axis.
                                                x: data.map(item => item.date_time.slice(11, 19)),
                                                // Map the "product" column to Y axis
                                                y: data.map(item => item.rain)
                                            }
                                        }]
                                    };
                                    if (option && typeof option === 'object') {
                                        myChart.setOption(option);
                                    }
                                }


                            }
                            tablebody = $("#content_1 #View4Tbl");
                            tablebody.append(tab);
                        }
                    });
                } else
                if (timeinterval == "24 hours") {
                    $.ajax({

                        dataType: "json",
                        url: "http://webapi19sa-1.course.tamk.cloud/v1/weather/rain/23",
                        type: 'GET',
                        success: function(data) {
                            $("#content_1 #View4Tbl").empty();
                            let tab =
                                `<tr>
                                    <th>Row_Number</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Measurement_Type</th>
                                    <th>Value</th>
                                </tr>`;
                            let count = 0;
                            for (let r of data) {

                                count = count + 1;

                                tab += `<tr> 
                                    <td>${count} </td>
                                    <td>${r.date_time.slice(0,10)}</td> 
                                    <td>${r.date_time.slice(11,19)}</td>
                                    <td>Rain</td>
                                    <td>${r.rain}</td>
                                            
                                </tr>`;
                                option = {

                                    grid: { containLabel: true },
                                    xAxis: { name: 'amount' },
                                    yAxis: { type: 'category' },
                                    visualMap: {
                                        orient: 'horizontal',
                                        left: 'center',
                                        min: 10,
                                        max: 100,
                                        text: ['High Score', 'Low Score'],
                                        // Map the score column to color
                                        dimension: 0,
                                        inRange: {
                                            color: ['#65B581', '#FFCE34', '#FD665F']
                                        }
                                    },
                                    series: [{
                                        type: 'bar',
                                        encode: {
                                            // Map the "amount" column to X axis.
                                            x: data.map(item => item.date_time.slice(11, 19)),
                                            // Map the "product" column to Y axis
                                            y: data.map(item => item.rain)
                                        }
                                    }]
                                };


                                if (option && typeof option === 'object') {
                                    myChart.setOption(option);
                                }



                            }
                            tablebody = $("#content_1 #View4Tbl");
                            tablebody.append(tab);
                        }
                    });
                } else

                if (timeinterval == "48 hours") {
                    $.ajax({

                        dataType: "json",
                        url: "http://webapi19sa-1.course.tamk.cloud/v1/weather/rain/47",
                        type: 'GET',
                        success: function(data) {
                            $("#content_1 #View4Tbl").empty();
                            let tab =
                                `<tr>
                                    <th>Row_Number</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Measurement_Type</th>
                                    <th>Value</th>
                                </tr>`;
                            let count = 0;
                            for (let r of data) {

                                count = count + 1;

                                tab += `<tr> 
                                    <td>${count} </td>
                                    <td>${r.date_time.slice(0,10)}</td> 
                                    <td>${r.date_time.slice(11,19)}</td>
                                    <td>Rain</td>
                                    <td>${r.rain}</td>
                                            
                                </tr>`;
                                option = {

                                    grid: { containLabel: true },
                                    xAxis: { name: 'amount' },
                                    yAxis: { type: 'category' },
                                    visualMap: {
                                        orient: 'horizontal',
                                        left: 'center',
                                        min: 10,
                                        max: 100,
                                        text: ['High Score', 'Low Score'],
                                        // Map the score column to color
                                        dimension: 0,
                                        inRange: {
                                            color: ['#65B581', '#FFCE34', '#FD665F']
                                        }
                                    },
                                    series: [{
                                        type: 'bar',
                                        encode: {
                                            // Map the "amount" column to X axis.
                                            x: data.map(item => item.date_time.slice(11, 19)),
                                            // Map the "product" column to Y axis
                                            y: data.map(item => item.rain)
                                        }
                                    }]
                                };


                                if (option && typeof option === 'object') {
                                    myChart.setOption(option);
                                }



                            }
                            tablebody = $("#content_1 #View4Tbl");
                            tablebody.append(tab);
                        }
                    });
                } else

                if (timeinterval == "72 hours") {
                    $.ajax({

                        dataType: "json",
                        url: "http://webapi19sa-1.course.tamk.cloud/v1/weather/rain/71",
                        type: 'GET',
                        success: function(data) {
                            $("#content_1 #View4Tbl").empty();
                            let tab =
                                `<tr>
                                    <th>Row_Number</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Measurement_Type</th>
                                    <th>Value</th>
                                </tr>`;
                            let count = 0;
                            for (let r of data) {

                                count = count + 1;

                                tab += `<tr> 
                                    <td>${count} </td>
                                    <td>${r.date_time.slice(0,10)}</td> 
                                    <td>${r.date_time.slice(11,19)}</td>
                                    <td>Rain</td>
                                    <td>${r.rain}</td>
                                            
                                </tr>`;
                                option = {

                                    grid: { containLabel: true },
                                    xAxis: { name: 'amount' },
                                    yAxis: { type: 'category' },
                                    visualMap: {
                                        orient: 'horizontal',
                                        left: 'center',
                                        min: 10,
                                        max: 100,
                                        text: ['High Score', 'Low Score'],
                                        // Map the score column to color
                                        dimension: 0,
                                        inRange: {
                                            color: ['#65B581', '#FFCE34', '#FD665F']
                                        }
                                    },
                                    series: [{
                                        type: 'bar',
                                        encode: {
                                            // Map the "amount" column to X axis.
                                            x: data.map(item => item.date_time.slice(11, 19)),
                                            // Map the "product" column to Y axis
                                            y: data.map(item => item.rain)
                                        }
                                    }]
                                };


                                if (option && typeof option === 'object') {
                                    myChart.setOption(option);
                                }



                            }
                            tablebody = $("#content_1 #View4Tbl");
                            tablebody.append(tab);
                        }
                    });
                } else

                if (timeinterval == "1 week") {
                    $.ajax({

                        dataType: "json",
                        url: "http://webapi19sa-1.course.tamk.cloud/v1/weather/rain/167",
                        type: 'GET',
                        success: function(data) {
                            $("#content_1 #View4Tbl").empty();
                            let tab =
                                `<tr>
                                    <th>Row_Number</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Measurement_Type</th>
                                    <th>Value</th>
                                </tr>`;
                            let count = 0;
                            for (let r of data) {

                                count = count + 1;

                                tab += `<tr> 
                                    <td>${count} </td>
                                    <td>${r.date_time.slice(0,10)}</td> 
                                    <td>${r.date_time.slice(11,19)}</td>
                                    <td>Rain</td>
                                    <td>${r.rain}</td>
                                            
                                </tr>`;

                                option = {

                                    grid: { containLabel: true },
                                    xAxis: { name: 'amount' },
                                    yAxis: { type: 'category' },
                                    visualMap: {
                                        orient: 'horizontal',
                                        left: 'center',
                                        min: 10,
                                        max: 100,
                                        text: ['High Score', 'Low Score'],
                                        // Map the score column to color
                                        dimension: 0,
                                        inRange: {
                                            color: ['#65B581', '#FFCE34', '#FD665F']
                                        }
                                    },
                                    series: [{
                                        type: 'bar',
                                        encode: {
                                            // Map the "amount" column to X axis.
                                            x: data.map(item => item.date_time.slice(11, 19)),
                                            // Map the "product" column to Y axis
                                            y: data.map(item => item.rain)
                                        }
                                    }]
                                };


                                if (option && typeof option === 'object') {
                                    myChart.setOption(option);
                                }


                            }
                            tablebody = $("#content_1 #View4Tbl");
                            tablebody.append(tab);
                        }
                    });
                } else

                if (timeinterval == "1 month") {
                    $.ajax({

                        dataType: "json",
                        url: "http://webapi19sa-1.course.tamk.cloud/v1/weather/rain/730",
                        type: 'GET',
                        success: function(data) {
                            $("#content_1 #View4Tbl").empty();
                            let tab =
                                `<tr>
                                    <th>Row_Number</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Measurement_Type</th>
                                    <th>Value</th>
                                </tr>`;
                            let count = 0;
                            for (let r of data) {

                                count = count + 1;

                                tab += `<tr> 
                                    <td>${count} </td>
                                    <td>${r.date_time.slice(0,10)}</td> 
                                    <td>${r.date_time.slice(11,19)}</td>
                                    <td>Rain</td>
                                    <td>${r.rain}</td>
                                            
                                </tr>`;

                                option = {

                                    grid: { containLabel: true },
                                    xAxis: { name: 'amount' },
                                    yAxis: { type: 'category' },
                                    visualMap: {
                                        orient: 'horizontal',
                                        left: 'center',
                                        min: 10,
                                        max: 100,
                                        text: ['High Score', 'Low Score'],
                                        // Map the score column to color
                                        dimension: 0,
                                        inRange: {
                                            color: ['#65B581', '#FFCE34', '#FD665F']
                                        }
                                    },
                                    series: [{
                                        type: 'bar',
                                        encode: {
                                            // Map the "amount" column to X axis.
                                            x: data.map(item => item.date_time.slice(11, 19)),
                                            // Map the "product" column to Y axis
                                            y: data.map(item => item.rain)
                                        }
                                    }]
                                };


                                if (option && typeof option === 'object') {
                                    myChart.setOption(option);
                                }


                            }
                            tablebody = $("#content_1 #View4Tbl");
                            tablebody.append(tab);
                        }
                    });
                }
            })

        } else if (measurments == "wind_speed") {
            $('#timeinterval').change(function() {
                var timeinterval = $('#timeinterval').find(":selected").text();

                if (timeinterval == "Now") {

                    $.ajax({

                        dataType: "json",
                        url: "http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_speed",
                        type: 'GET',
                        success: function(data) {
                            $("#content_1 #View4Tbl").empty();

                            let tab =
                                `<tr>
                                    <th>Row_Number</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Measurement_Type</th>
                                    <th>Value</th>
                                </tr>`;
                            let count = 0;
                            for (let r of data) {

                                count = count + 1;
                                if (count <= 20) {
                                    tab += `<tr> 
                                    <td>${count} </td>
                                    <td>${r.date_time.slice(0,10)}</td> 
                                    <td>${r.date_time.slice(11,19)}</td>
                                    <td>wind_speed</td>
                                    <td>${r.wind_speed}</td>
                                            
                                </tr>`;

                                    option = {
                                        xAxis: {
                                            type: 'category',
                                            data: data.map(item => item.date_time.slice(11, 19))
                                                // [r.date_time.slice(11, 19)]
                                        },
                                        yAxis: {
                                            type: 'value'
                                        },
                                        series: [{
                                            data: data.map(item => item.wind_speed),
                                            type: 'line'
                                        }]
                                    };

                                    if (option && typeof option === 'object') {
                                        myChart.setOption(option);
                                    }
                                }


                            }
                            tablebody = $("#content_1 #View4Tbl");
                            tablebody.append(tab);
                        }
                    });
                } else
                if (timeinterval == "24 hours") {
                    $.ajax({

                        dataType: "json",
                        url: "http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_speed/23",
                        type: 'GET',
                        success: function(data) {
                            $("#content_1 #View4Tbl").empty();
                            let tab =
                                `<tr>
                                    <th>Row_Number</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Measurement_Type</th>
                                    <th>Value</th>
                                </tr>`;
                            let count = 0;
                            for (let r of data) {

                                count = count + 1;

                                tab += `<tr> 
                                    <td>${count} </td>
                                    <td>${r.date_time.slice(0,10)}</td> 
                                    <td>${r.date_time.slice(11,19)}</td>
                                    <td>wind_speed</td>
                                    <td>${r.wind_speed}</td>
                                            
                                </tr>`;
                                option = {
                                    xAxis: {
                                        type: 'category',
                                        data: data.map(item => item.date_time.slice(11, 19))
                                            // [r.date_time.slice(11, 19)]
                                    },
                                    yAxis: {
                                        type: 'value'
                                    },
                                    series: [{
                                        data: data.map(item => item.wind_speed),
                                        type: 'line'
                                    }]
                                };

                                if (option && typeof option === 'object') {
                                    myChart.setOption(option);
                                }



                            }
                            tablebody = $("#content_1 #View4Tbl");
                            tablebody.append(tab);
                        }
                    });
                } else

                if (timeinterval == "48 hours") {
                    $.ajax({

                        dataType: "json",
                        url: "http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_speed/47",
                        type: 'GET',
                        success: function(data) {
                            $("#content_1 #View4Tbl").empty();
                            let tab =
                                `<tr>
                                    <th>Row_Number</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Measurement_Type</th>
                                    <th>Value</th>
                                </tr>`;
                            let count = 0;
                            for (let r of data) {

                                count = count + 1;

                                tab += `<tr> 
                                    <td>${count} </td>
                                    <td>${r.date_time.slice(0,10)}</td> 
                                    <td>${r.date_time.slice(11,19)}</td>
                                    <td>wind_speed</td>
                                    <td>${r.wind_speed}</td>
                                            
                                </tr>`;
                                option = {
                                    xAxis: {
                                        type: 'category',
                                        data: data.map(item => item.date_time.slice(11, 19))
                                            // [r.date_time.slice(11, 19)]
                                    },
                                    yAxis: {
                                        type: 'value'
                                    },
                                    series: [{
                                        data: data.map(item => item.wind_speed),
                                        type: 'line'
                                    }]
                                };

                                if (option && typeof option === 'object') {
                                    myChart.setOption(option);
                                }



                            }
                            tablebody = $("#content_1 #View4Tbl");
                            tablebody.append(tab);
                        }
                    });
                } else

                if (timeinterval == "72 hours") {
                    $.ajax({

                        dataType: "json",
                        url: "http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_speed/71",
                        type: 'GET',
                        success: function(data) {
                            $("#content_1 #View4Tbl").empty();
                            let tab =
                                `<tr>
                                    <th>Row_Number</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Measurement_Type</th>
                                    <th>Value</th>
                                </tr>`;
                            let count = 0;
                            for (let r of data) {

                                count = count + 1;

                                tab += `<tr> 
                                    <td>${count} </td>
                                    <td>${r.date_time.slice(0,10)}</td> 
                                    <td>${r.date_time.slice(11,19)}</td>
                                    <td>wind_speed</td>
                                    <td>${r.wind_speed}</td>
                                            
                                </tr>`;
                                option = {
                                    xAxis: {
                                        type: 'category',
                                        data: data.map(item => item.date_time.slice(11, 19))
                                            // [r.date_time.slice(11, 19)]
                                    },
                                    yAxis: {
                                        type: 'value'
                                    },
                                    series: [{
                                        data: data.map(item => item.wind_speed),
                                        type: 'line'
                                    }]
                                };

                                if (option && typeof option === 'object') {
                                    myChart.setOption(option);
                                }



                            }
                            tablebody = $("#content_1 #View4Tbl");
                            tablebody.append(tab);
                        }
                    });
                } else

                if (timeinterval == "1 week") {
                    $.ajax({

                        dataType: "json",
                        url: "http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_speed/167",
                        type: 'GET',
                        success: function(data) {
                            $("#content_1 #View4Tbl").empty();
                            let tab =
                                `<tr>
                                    <th>Row_Number</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Measurement_Type</th>
                                    <th>Value</th>
                                </tr>`;
                            let count = 0;
                            for (let r of data) {

                                count = count + 1;

                                tab += `<tr> 
                                    <td>${count} </td>
                                    <td>${r.date_time.slice(0,10)}</td> 
                                    <td>${r.date_time.slice(11,19)}</td>
                                    <td>Rain</td>
                                    <td>${r.wind_speed}</td>
                                            
                                </tr>`;

                                option = {
                                    xAxis: {
                                        type: 'category',
                                        data: data.map(item => item.date_time.slice(11, 19))
                                            // [r.date_time.slice(11, 19)]
                                    },
                                    yAxis: {
                                        type: 'value'
                                    },
                                    series: [{
                                        data: data.map(item => item.wind_speed),
                                        type: 'line'
                                    }]
                                };

                                if (option && typeof option === 'object') {
                                    myChart.setOption(option);
                                }


                            }
                            tablebody = $("#content_1 #View4Tbl");
                            tablebody.append(tab);
                        }
                    });
                } else

                if (timeinterval == "1 month") {
                    $.ajax({

                        dataType: "json",
                        url: "http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_speed/730",
                        type: 'GET',
                        success: function(data) {
                            $("#content_1 #View4Tbl").empty();
                            let tab =
                                `<tr>
                                    <th>Row_Number</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Measurement_Type</th>
                                    <th>Value</th>
                                </tr>`;
                            let count = 0;
                            for (let r of data) {

                                count = count + 1;

                                tab += `<tr> 
                                    <td>${count} </td>
                                    <td>${r.date_time.slice(0,10)}</td> 
                                    <td>${r.date_time.slice(11,19)}</td>
                                    <td>wind_speed</td>
                                    <td>${r.wind_speed}</td>
                                            
                                </tr>`;

                                option = {
                                    xAxis: {
                                        type: 'category',
                                        data: data.map(item => item.date_time.slice(11, 19))
                                            // [r.date_time.slice(11, 19)]
                                    },
                                    yAxis: {
                                        type: 'value'
                                    },
                                    series: [{
                                        data: data.map(item => item.wind_speed),
                                        type: 'line'
                                    }]
                                };

                                if (option && typeof option === 'object') {
                                    myChart.setOption(option);
                                }


                            }
                            tablebody = $("#content_1 #View4Tbl");
                            tablebody.append(tab);
                        }
                    });
                }
            })
        }
    })
})