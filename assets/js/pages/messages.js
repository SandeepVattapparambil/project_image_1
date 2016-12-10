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
    
    //Chat Modal
    $('.modal').modal({
        dismissible: true, // Modal can be dismissed by clicking outside of the modal
        opacity: .5, // Opacity of modal background
        in_duration: 300, // Transition in duration
        out_duration: 200, // Transition out duration
        starting_top: '4%', // Starting top style attribute
        ending_top: '10%', // Ending top style attribute
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
