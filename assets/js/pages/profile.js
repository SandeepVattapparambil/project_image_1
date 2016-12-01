/******************Profile settings***********************/
$(document).ready(function() {
  //Bot button animation on hover
  $('#bot').addClass('animated bounceIn');
    $('#bot').hover(function(){
      $(this).addClass('bot-bounce-vertical');
    });
    //Tooltip punk style
    $('.tooltip').tooltipster({
        animation: 'fade',
        delay: 200,
        theme: 'tooltipster-punk',
        side: 'right'
    });
    //Tooltip normal style
    $('.bot-btn').tooltipster({
        animation: 'fade',
        delay: 200,
        theme: 'tooltipster-borderless',
        side: 'left'
    });
    
});
