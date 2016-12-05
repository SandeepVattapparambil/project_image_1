/******************Profile settings***********************/
$(document).ready(function() {
    //Bot button animation on hover
    $('#bot').addClass('animated bounceIn');
    $('#bot').hover(function() {
        $(this).addClass('bot-bounce-vertical');
    });
    //Tooltip punk style
    $('.tooltip').tooltipster({
        animation: 'fade',
        delay: 200,
        theme: 'tooltipster-borderless',
        side: 'right'
    });
    //Tooltip normal style
    $('.bot-btn').tooltipster({
        animation: 'fade',
        delay: 200,
        theme: 'tooltipster-borderless',
        side: 'left'
    });
    //Sparkline graphs
    var DrawSparkline = function() {
        var linePoints = [0, 1, 3, 2, 1, 1, 4, 1, 2, 0, 3, 1, 3, 4, 1, 0, 2, 3, 6, 3, 4, 2, 7, 5, 2, 4, 1, 2, 6, 13, 4, 2];
        $('#sparkline-line1, #sparkline-line2, #sparkline-line3, #sparkline-line4').sparkline(linePoints, {
            type: 'line',
            width: 'calc(100% + 4px)',
            height: '45',
            chartRangeMax: 13,
            lineWidth: 2,
            spotRadius: 3,
            spotColor: '#827717',
            minSpotColor: '#2196f3',
            maxSpotColor: '#2196f3',
            lineColor: '#afb42b',
            fillColor: '#f0f4c3',
            highlightLineColor: '#c0ca33',
            highlightSpotColor: '#827717',
            tooltip: true
        });
    };
    DrawSparkline();
    var resizeChart;
    $(window).resize(function(e) {
        clearTimeout(resizeChart);
        resizeChart = setTimeout(function() {
            DrawSparkline();
        }, 300);
    });
    //Image card multiple indicator icon
    $('.image-activator').hover(function() {
        $(this).parent().find('p').fadeToggle();
    });
});
