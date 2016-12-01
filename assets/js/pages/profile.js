/******************Profile settings***********************/
/******************tooltipster********************/
$(document).ready(function() {
  //
  $('#bot').addClass('animated bounceIn');
    $('#bot').hover(function(){
      $(this).addClass('bot-bounce-vertical');
    });
    //
    $('.tooltip').tooltipster({
        animation: 'fade',
        delay: 200,
        theme: 'tooltipster-punk',
        side: 'right'
    });
});
/********Bot*********/
$(document).ready(function() {
    $('.bot-btn').tooltipster({
        animation: 'fade',
        delay: 200,
        theme: 'tooltipster-borderless',
        side: 'left'
    });
});
/**********************************************/
