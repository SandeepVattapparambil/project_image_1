/*****************HOME*************************/
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
function drop_comment(selector1, selector2) {
    var comment_card = $(selector1);
    var icon = $(selector2);
    if ((comment_card).hasClass('hiden')) {
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
$(document).ready(function() {
    $('.image-activator').hover(function() {
        $(this).parent().find('p').toggle('fast');
    });
});
/*************************************************/
$(document).ready(function() {
    $('.reply').click(function() {
        var trigger = $(".reply");
        var parent = $(this).parent();
        var content = '<div id="this_comment"class="row valign-wrapper" style="display:none">' +
            '<div class="input-field col s8 valign">' +
            '<input placeholder="Comment here.." id="first_name" type="text" class="validate">' +
            '</div>' +
            '<div class="col s2 valign">' +
            '<a class="btn-floating waves-effect waves-light grey">' +
            ' <i class="material-icons">send</i>' +
            ' </a>' +
            '</div>' +
            ' <a class="grey-text close_this" href="javascript:void(0)"><i class="material-icons tiny">close</i></a>' +
            '</div>';
        $(parent).after(content);
        $(trigger).hide();
        $('#this_comment').fadeIn();
        $('.close_this').click(function() {
            $(this).parent().fadeOut(function() {
                //$(this).parent().fadeOut('slow').remove();
                //remove comment box div
                $('#this_comment').remove();
                $(trigger).show();
            });
        });
    });
});
/***************************************************/
/******************tooltipster********************/
$(document).ready(function() {
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
/*******Home card-list toggle********/
$(document).ready(function() {
    $('#view_list').click(function() {
        //console.log('list clicked');
        NProgress.start();
        $('.card-view-item').fadeOut(function() {
            $('.list-view-item').fadeIn();
            NProgress.done();
        });
    });
});
$(document).ready(function() {
    $('#view_module').click(function() {
        //console.log('Cards clicked');
        NProgress.start();
        $('.list-view-item').fadeOut(function() {
            $('.card-view-item').fadeIn();
            NProgress.done();
        });
    });
});
/*************************************************/
$(document).ready(function() {
    $('#bot').addClass('animated bounceIn');
    $('#bot').hover(function(){
      $(this).addClass('bot-bounce-vertical');
    })
});
/************************************************/
/***********Home - card view action btn**************/
$(document).ready(function(){
  //Show text on view btn when mouse enter
  $('.hover-expand-view').mouseenter(function(){
    $(this).removeClass('btn-floating');
    $(this).addClass('lime-text text-darken-3');
    $(this).append('View Image');
  });
  //Reset view btn back to normal state
  $('.hover-expand-view').mouseleave(function(){
    $(this).addClass('btn-floating');
    $(this).removeClass('lime-text text-darken-3');
    $(this).text('');
    $(this).html('<i class="material-icons left lime-text text-darken-3">input</i>');
  });
  //Show text on write btn on mouse enter
  $('.hover-expand-write').mouseenter(function(){
    $(this).removeClass('btn-floating');
    $(this).addClass('lime-text text-darken-3');
    $(this).append('Write !');
  });
  //Reset write btn back to normal state
  $('.hover-expand-write').mouseleave(function(){
    $(this).addClass('btn-floating');
    $(this).removeClass('lime-text text-darken-3');
    $(this).text('');
    $(this).html('<i class="material-icons left lime-text text-darken-3">mode_edit</i>');
  });
});
/*********************************************************/
