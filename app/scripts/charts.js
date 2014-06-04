'use strict';

// CHARTS
$(function () { //PIE CHART
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'chart_pie',
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                text: 'Skill Areas'
            },
            tooltip: {
        	    pointFormat: '{series.name}: {point.percentage}%',
            	percentageDecimals: 1
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        color: '#000000',
                        connectorColor: '#000000',
                        formatter: function() {
                            return this.point.name + this.percentage +' %';
                        }
                    }
                }
            },
            series: [{
                type: 'pie',
                name: 'Skill Set',
                data: [
                    ['Sys Development',   45.00],
                    ['Graphics \u0026 Design',       25.00],
                    ['Project Management',       30.00]
                ]
            }]
        });
    });   
});