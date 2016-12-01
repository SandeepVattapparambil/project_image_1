/**************Notifications Settings********************/
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
    //Scroll bottom detect and load content initiator
    $(window).scroll(function() {
        if ($(window).scrollTop() + $(window).height() == $(document).height()) {
            //alert("bottom!");
            $('.bottom-card').show(function() {
                $('.bottom-card-progress').show().delay(2000);
                $('.bottom-card-progress').fadeOut(function() {
                    $('.bottom-card-icon').fadeIn();
                });
            });
        }
    });

    //Hammer touch on notification item for mobile only
    var notification_item = document.getElementById('swipe-to');
    var element = new Hammer(notification_item);
    element.on("tap", function(ev) {
        console.log(ev.type + " gesture detected.");
        $('#swipe-to').removeClass('new-noti');
    });
    element.on("press", function(ev) {
        console.log(ev.type + " gesture detected.");
        $('#notification_header').after(`<div class="card-content center lime lighten-3 bordered">Swipe to delete</div>`);
    });
});
