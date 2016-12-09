/*************Messages****************/
$(document).ready(function() {
    //Bot button bounce
    $('#bot').addClass('animated bounceIn');
    $('#bot').hover(function() {
        $(this).addClass('bot-bounce-vertical');
    });
    //Image hover icon
    $('.image-activator').hover(function() {
        $(this).parent().find('p').toggle('fast');
    });
    //tooltip init
    $('.tooltip').tooltipster({
        animation: 'fade',
        delay: 200,
        theme: 'tooltipster-borderless',
        side: 'bottom'
    });
    //tooltip init for bot
    $('.bot-btn').tooltipster({
        animation: 'fade',
        delay: 200,
        theme: 'tooltipster-borderless',
        side: 'left'
    });
    //Conversation
    $('#converse1').click(function() {
        var device = getDeviceType();
        if (device != '') {
            $('#ctrl_bar').slideUp();
            $('#converse').fadeIn();
        } else {
            console.log('Desktop');
            $('#converse').fadeIn();
        }
    });
    $('#group1').click(function() {
        var device = getDeviceType();
        if (device != '') {
            $('#ctrl_bar').slideUp();
            $('#converse-group').fadeIn();
        } else {
            console.log('Desktop');
            $('#converse-group').fadeIn();
        }
    });
    //Function to detect mobile
    function getDeviceType() {
        if (navigator.userAgent.match(/Android/i)) {
            var device = 'Android';
            return device;
        } else if (navigator.userAgent.match(/BlackBerry/i)) {
            var device = 'Blackberry';
            return device;
        } else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
            var device = 'iOS';
            return device;
        } else if (navigator.userAgent.match(/Opera Mini/i)) {
            var device = 'Opera';
            return device;
        } else if (navigator.userAgent.match(/IEMobile/i)) {
            var device = 'Windows';
            return device;
        } else {
            var device = '';
            return device;
        }
    }
});
