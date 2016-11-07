/*****************home******************************/
$(document).ready(function() {
    console.log("App loaded !");
});
/************************************/
$(document).ready(function() {
    $('#img_upload').mouseenter(function() {
        $('#img_upload').addClass('btn-large');
    });
    $('#img_upload').mouseleave(function() {
        $('#img_upload').removeClass('btn-large');
    });
});
$(document).ready(function() {
    $('#url_upload').mouseenter(function() {
        $('#url_upload').addClass('btn-large');
    });
    $('#url_upload').mouseleave(function() {
        $('#url_upload').removeClass('btn-large');
    });
});
/**********image upload form hero toggle***********/
/********************************************************/
$(document).ready(function() {
    $('#img_upload').click(function() {
        $('#dropzone_form').fadeIn(function() {
            $('#url_upload').fadeOut(function() {
                $('#pulse_div').pulsate({
                    color: "#cddc39", // set the color of the pulse
                    reach: 20, // how far the pulse goes in px
                    speed: 1000, // how long one pulse takes in ms
                    pause: 0, // how long the pause between pulses is in ms
                    glow: true, // if the glow should be shown too
                    repeat: false, // will repeat forever if true, if given a number will repeat for that many times
                    onHover: false // if true only pulsate if user hovers over the element
                });
            });
        });
    });
});
$(document).ready(function() {
    $('#no_marg_up_down').click(function() {
        $('#dropzone_form').slideUp(function() {
            $('#url_upload').fadeIn();
        });
    });
});
$(document).ready(function() {
    $('#url_upload').click(function() {
        $('#url_form').fadeIn(function() {
            $('#img_upload').fadeOut(function() {
                $('#pulse_input').pulsate({
                    color: "#cddc39", // set the color of the pulse
                    reach: 20, // how far the pulse goes in px
                    speed: 1000, // how long one pulse takes in ms
                    pause: 0, // how long the pause between pulses is in ms
                    glow: true, // if the glow should be shown too
                    repeat: false, // will repeat forever if true, if given a number will repeat for that many times
                    onHover: false // if true only pulsate if user hovers over the element
                });
            });
        });
    });
});
$(document).ready(function() {
    $('#no_marg_up_down1').click(function() {
        $('#url_form').slideUp(function() {
            $('#img_upload').fadeIn();
        });
    });
});
/************************************************************/
function drop_comment(selector1, selector2){
  var comment_card = $(selector1);
  var icon = $(selector2);
  if((comment_card).hasClass('hiden')){
    $(comment_card).slideDown("slow");
    $(comment_card).removeClass("hiden");
    $(icon).html('arrow_upward');
  } else {
    $(comment_card).slideUp("slow");
    $(comment_card).addClass("hiden");
    $(icon).html('comment');
  }
}
/***********************************************/
