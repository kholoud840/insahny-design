$().ready(function() {
    $sidebar = $('.sidebar');
    $sidebar_img_container = $sidebar.find('.sidebar-background');

    $full_page = $('.full-page');

    $sidebar_responsive = $('body > .navbar-collapse');

    window_width = $(window).width();

    fixed_plugin_open = $('.sidebar .sidebar-wrapper .nav li.active a p').html();

    if (window_width > 767 && fixed_plugin_open == 'Dashboard') {
        if ($('.fixed-plugin .dropdown').hasClass('show-dropdown')) {
            $('.fixed-plugin .dropdown').addClass('show');
        }

    }

    $('.fixed-plugin a').click(function(event) {
        // Alex if we click on switch, stop propagation of the event, so the dropdown will not be hide, otherwise we set the  section active
        if ($(this).hasClass('switch-trigger')) {
            if (event.stopPropagation) {
                event.stopPropagation();
            } else if (window.event) {
                window.event.cancelBubble = true;
            }
        }
    });

    $('.fixed-plugin .background-color span').click(function() {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');

        var new_color = $(this).data('color');

        if ($sidebar.length != 0) {
            $sidebar.attr('data-color', new_color);
        }

        if ($full_page.length != 0) {
            $full_page.attr('filter-color', new_color);
        }

        if ($sidebar_responsive.length != 0) {
            $sidebar_responsive.attr('data-color', new_color);
        }
    });

    $('.fixed-plugin .img-holder').click(function() {
        $full_page_background = $('.full-page-background');

        $(this).parent('li').siblings().removeClass('active');
        $(this).parent('li').addClass('active');


        var new_image = $(this).find("img").attr('src');

        if ($sidebar_img_container.length != 0 && $('.switch-sidebar-image input:checked').length != 0) {
            $sidebar_img_container.fadeOut('fast', function() {
                $sidebar_img_container.css('background-image', 'url("' + new_image + '")');
                $sidebar_img_container.fadeIn('fast');
            });
        }

        if ($full_page_background.length != 0 && $('.switch-sidebar-image input:checked').length != 0) {
            var new_image_full_page = $('.fixed-plugin li.active .img-holder').find('img').data('src');

            $full_page_background.fadeOut('fast', function() {
                $full_page_background.css('background-image', 'url("' + new_image_full_page + '")');
                $full_page_background.fadeIn('fast');
            });
        }

        if ($('.switch-sidebar-image input:checked').length == 0) {
            var new_image = $('.fixed-plugin li.active .img-holder').find("img").attr('src');
            var new_image_full_page = $('.fixed-plugin li.active .img-holder').find('img').data('src');

            $sidebar_img_container.css('background-image', 'url("' + new_image + '")');
            $full_page_background.css('background-image', 'url("' + new_image_full_page + '")');
        }

        if ($sidebar_responsive.length != 0) {
            $sidebar_responsive.css('background-image', 'url("' + new_image + '")');
        }
    });

    $('.switch input').on("switchChange.bootstrapSwitch", function() {

        $full_page_background = $('.full-page-background');

        $input = $(this);

        if ($input.is(':checked')) {
            if ($sidebar_img_container.length != 0) {
                $sidebar_img_container.fadeIn('fast');
                $sidebar.attr('data-image', '#');
            }

            if ($full_page_background.length != 0) {
                $full_page_background.fadeIn('fast');
                $full_page.attr('data-image', '#');
            }

            background_image = true;
        } else {
            if ($sidebar_img_container.length != 0) {
                $sidebar.removeAttr('data-image');
                $sidebar_img_container.fadeOut('fast');
            }

            if ($full_page_background.length != 0) {
                $full_page.removeAttr('data-image', '#');
                $full_page_background.fadeOut('fast');
            }

            background_image = false;
        }
    });

    // hello world

    var dataSales = {
        labels: ['9:00AM', '9:15AM', '9:30PM', '9:45PM', '10:00PM', '10:15PM', '10:30AM', '10:45AM'],
        series: [

            [67, 52, 43, 40, 87, 35, 35, 37, 39, 42, 44, 47]
        ]
    };

    //////////////

    //console.log("data sales: " + dataSales);

//    var testStudent = document.querySelector('#testStudent');

    /*testStudent.addEventListener('click', function(){
        var data = [23, 113, 67, 108, 190, 239, 307, 308, 439, 410, 410, 509];
        dataSales.series.push(data);
        console.log(dataSales);

        chartHours = Chartist.Line('#chartHours', dataSales, optionsSales, responsiveSales);
    }); */

    ////////added/////////

    var students = document.querySelectorAll('.students-filter input');

    var st1 = [87, 85, 90, 92, 54, 86, 98, 65, 52, 88, 46, 44, 75, 100];
    //var st1 = [0, 0 ,0 ,100 ,100 ,90,40,70];
    var st2 = [67, 52, 13, 40, 87, 35, 435, 437, 539, 42, 44, 47];
    var st3 = [03, 13, 67, 80, 19, 29, 15, 38, 49, 10, 10, 09];
    var st4 = [87, 85, 90, 92, 54, 86, 98, 65, 52, 88, 46, 44];
    var st5 = [67, 52, 13, 40, 87, 35, 435, 437, 539, 42, 44, 47];
    var st6 = [03, 13, 67, 80, 19, 29, 15, 38, 49, 10, 10, 09];

    students.forEach(function(stud) {
        stud.addEventListener("change", function() {
            var studID = eval(stud.id);
            dataSales.series.push(studID);
            console.log(dataSales);
            var chartHours = Chartist.Line('#chartHours', dataSales, optionsSales, responsiveSales);
        });
    });

    ///////////////


    //Bar chart json work:

    var quizData = {"A":2,"B":1,"C":1, "D": 0};
    var allBars = document.querySelectorAll('.bar');

    for(var i = 0; i < allBars.length; i++) {
        if(i==0) {
            allBars[i].style.height = (quizData["A"] * 10 ) + "%";
        }
        if(i==1) {
            allBars[i].style.height = (quizData["B"] * 10) + "%";
        }
        if(i==2) {
            allBars[i].style.height = (quizData["C"] * 10) + "%";
        }
        if(i==3) {
            allBars[i].style.height = (quizData["D"] * 10) + "%";
        }
    }


    ///////

    var optionsSales = {
        lineSmooth: false,
        low: 1,
        high: 100,
        showArea: true,
        scaleMinSpace: 25,
        onlyInteger: true,
        referenceValue: 25,
        height: "245px",
        axisX: {
            showGrid: true,
        },
        lineSmooth: Chartist.Interpolation.simple({
            divisor: 3
        }),
        showLine: false,
        showPoint: false,
        fullWidth: false
    };

    var responsiveSales = [
        ['screen and (max-width: 640px)', {
            axisX: {
                labelInterpolationFnc: function(value) {
                    return value[0];
                }
            }
        }]
    ];

    var chartHours = Chartist.Line('#chartHours', dataSales, optionsSales, responsiveSales);


    type = ['primary', 'info', 'success', 'warning', 'danger'];

    demo = {
        initPickColor: function() {
            $('.pick-class-label').click(function() {
                var new_class = $(this).attr('new-class');
                var old_class = $('#display-buttons').attr('data-class');
                var display_div = $('#display-buttons');
                if (display_div.length) {
                    var display_buttons = display_div.find('.btn');
                    display_buttons.removeClass(old_class);
                    display_buttons.addClass(new_class);
                    display_div.attr('data-class', new_class);
                }
            });
        },

        initDocumentationCharts: function() {
            /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */

            dataDailySalesChart = {
                labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
                series: [
                    [12, 17, 7, 17, 23, 18, 38]
                ]
            };

            optionsDailySalesChart = {
                lineSmooth: Chartist.Interpolation.cardinal({
                    tension: 0
                }),
                low: 0,
                high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
                chartPadding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
            }

            var dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

            // lbd.startAnimationForLineChart(dailySalesChart);
        },

        initDashboardPageCharts: function() {

            var dataPreferences = {
                series: [
                    [25, 30, 20, 25]
                ]
            };

            var optionsPreferences = {
                donut: true,
                donutWidth: 40,
                startAngle: 0,
                total: 100,
                showLabel: false,
                axisX: {
                    showGrid: false
                }
            };

            Chartist.Pie('#chartPreferences1', dataPreferences, optionsPreferences);

            Chartist.Pie('#chartPreferences1', {
                labels: ['53%', '36%'],
                series: [53, 36]
            });

            Chartist.Pie('#chartPreferences2', dataPreferences, optionsPreferences);

            Chartist.Pie('#chartPreferences2', {
                labels: ['33%', '26%'],
                series: [33, 26]
            });



            var data = {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                series: [
                    [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
                    [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695]
                ]
            };

            var options = {
                seriesBarDistance: 10,
                axisX: {
                    showGrid: false
                },
                height: "245px"
            };

            var responsiveOptions = [
                ['screen and (max-width: 640px)', {
                    seriesBarDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function(value) {
                            return value[0];
                        }
                    }
                }]
            ];

            var chartActivity = Chartist.Bar('#chartActivity', data, options, responsiveOptions);

            //bar chart dashboard 2:


            ///


            // lbd.startAnimationForBarChart(chartActivity);

            // /* ----------==========     Daily Sales Chart initialization    ==========---------- */
            //
            // dataDailySalesChart = {
            //     labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            //     series: [
            //         [12, 17, 7, 17, 23, 18, 38]
            //     ]
            // };
            //
            // optionsDailySalesChart = {
            //     lineSmooth: Chartist.Interpolation.cardinal({
            //         tension: 0
            //     }),
            //     low: 0,
            //     high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
            //     chartPadding: { top: 0, right: 0, bottom: 0, left: 0},
            // }
            //
            // var dailySalesChart = Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

            // lbd.startAnimationForLineChart(dailySalesChart);

            //
            //
            // /* ----------==========     Completed Tasks Chart initialization    ==========---------- */
            //
            // dataCompletedTasksChart = {
            //     labels: ['12am', '3pm', '6pm', '9pm', '12pm', '3am', '6am', '9am'],
            //     series: [
            //         [230, 750, 450, 300, 280, 240, 200, 190]
            //     ]
            // };
            //
            // optionsCompletedTasksChart = {
            //     lineSmooth: Chartist.Interpolation.cardinal({
            //         tension: 0
            //     }),
            //     low: 0,
            //     high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
            //     chartPadding: { top: 0, right: 0, bottom: 0, left: 0}
            // }
            //
            // var completedTasksChart = new Chartist.Line('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);
            //
            // // start animation for the Completed Tasks Chart - Line Chart
            // lbd.startAnimationForLineChart(completedTasksChart);
            //
            //
            // /* ----------==========     Emails Subscription Chart initialization    ==========---------- */
            //
            // var dataEmailsSubscriptionChart = {
            //   labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            //   series: [
            //     [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]
            //
            //   ]
            // };
            // var optionsEmailsSubscriptionChart = {
            //     axisX: {
            //         showGrid: false
            //     },
            //     low: 0,
            //     high: 1000,
            //     chartPadding: { top: 0, right: 5, bottom: 0, left: 0}
            // };
            // var responsiveOptions = [
            //   ['screen and (max-width: 640px)', {
            //     seriesBarDistance: 5,
            //     axisX: {
            //       labelInterpolationFnc: function (value) {
            //         return value[0];
            //       }
            //     }
            //   }]
            // ];
            // var emailsSubscriptionChart = Chartist.Bar('#emailsSubscriptionChart', dataEmailsSubscriptionChart, optionsEmailsSubscriptionChart, responsiveOptions);
            //
            // //start animation for the Emails Subscription Chart
            // lbd.startAnimationForBarChart(emailsSubscriptionChart);

        },

        initGoogleMaps: function() {
            var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
            var mapOptions = {
                zoom: 13,
                center: myLatlng,
                scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
                styles: [{
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#e9e9e9"
                    }, {
                        "lightness": 17
                    }]
                }, {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#f5f5f5"
                    }, {
                        "lightness": 20
                    }]
                }, {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#ffffff"
                    }, {
                        "lightness": 17
                    }]
                }, {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "color": "#ffffff"
                    }, {
                        "lightness": 29
                    }, {
                        "weight": 0.2
                    }]
                }, {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#ffffff"
                    }, {
                        "lightness": 18
                    }]
                }, {
                    "featureType": "road.local",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#ffffff"
                    }, {
                        "lightness": 16
                    }]
                }, {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#f5f5f5"
                    }, {
                        "lightness": 21
                    }]
                }, {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#dedede"
                    }, {
                        "lightness": 21
                    }]
                }, {
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                        "visibility": "on"
                    }, {
                        "color": "#ffffff"
                    }, {
                        "lightness": 16
                    }]
                }, {
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "saturation": 36
                    }, {
                        "color": "#333333"
                    }, {
                        "lightness": 40
                    }]
                }, {
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "transit",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#f2f2f2"
                    }, {
                        "lightness": 19
                    }]
                }, {
                    "featureType": "administrative",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#fefefe"
                    }, {
                        "lightness": 20
                    }]
                }, {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "color": "#fefefe"
                    }, {
                        "lightness": 17
                    }, {
                        "weight": 1.2
                    }]
                }]
            };

            var map = new google.maps.Map(document.getElementById("map"), mapOptions);

            var marker = new google.maps.Marker({
                position: myLatlng,
                title: "Hello World!"
            });

            // To add the marker to the map, call setMap();
            marker.setMap(map);
        },

        showNotification: function(from, align) {
            color = Math.floor((Math.random() * 4) + 1);

            $.notify({
                icon: "nc-icon nc-app",
                message: "Welcome to <b>Light Bootstrap Dashboard</b> - a beautiful freebie for every web developer."

            }, {
                type: type[color],
                timer: 8000,
                placement: {
                    from: from,
                    align: align
                }
            });
        }



    }



});