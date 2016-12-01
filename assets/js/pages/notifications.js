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
        //console.log(ev.type + " gesture detected.");
        $('#swipe-to').removeClass('new-noti');
        $('.done').fadeIn();
    });
    element.on("press", function(ev) {
        $('#press_noti').slideDown();
    });
    element.on("swipeleft", function(ev) {
        //console.log(ev.type + " gesture detected.");
        $('#swipe-to').addClass('animated fadeOutLeft');
        remove_element('#swipe-to');
    });
    element.on("swiperight", function(ev) {
        //console.log(ev.type + " gesture detected.");
        $('#swipe-to').addClass('animated fadeOutRight');
        remove_element('#swipe-to');
    });
    //function to remove element
    function remove_element(selector) {
        setTimeout(function() {
          $(selector).slideUp(function(){
            $(selector).remove();
          });
          Materialize.toast('Notification deleted !', 4000);
        }, 900);
    }
    //Notifications desktop
    $('#click-to').click(function(){
      $('#click-to').removeClass('new-noti');
      $('.done').fadeIn();
    });
    //delete notification on desktop
    $('.delete').click(function(){
      var div = $(this).closest('div');
      var rule = $('#rule1')
      //$(div).addClass('animated fadeOut');
      $(div).slideUp(function(){
        $(div).remove();
        $(rule).remove();
        Materialize.toast('<i class="material-icons left">delete</i> Notification deleted !', 4000);
      });
    });
});
