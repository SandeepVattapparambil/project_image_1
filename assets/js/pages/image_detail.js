/******************************************/
$(document).ready(function() {
    $('#bot').addClass('animated bounceIn');
    $('#bot').hover(function() {
        $(this).addClass('bot-bounce-vertical');
    })
});
/************************************************/
$(document).ready(function() {
    $('.image-activator').hover(function() {
        $(this).parent().find('p').toggle('fast');
    });
});
/******************tooltipster********************/
$(document).ready(function() {
    $('.tooltip').tooltipster({
        animation: 'fade',
        delay: 200,
        theme: 'tooltipster-borderless',
        side: 'bottom'
    });
});
/********Bot element tooltip init*********/
$(document).ready(function() {
    $('.bot-btn').tooltipster({
        animation: 'fade',
        delay: 200,
        theme: 'tooltipster-borderless',
        side: 'left'
    });
});
/**********************************************/
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
/**********************************************************************/
$(document).ready(function() {
    $('#no_marg_up_down1').click(function() {
        $('#url_form').slideUp(function() {
            $('#img_upload').fadeIn();
        });
    });
});

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
/***********************************************************/
/*************Color extract using Vibrant.js**********/
function colorExtract(image) {
    var i = 0;
    var color_array = [];
    var img = document.getElementById(image);
    img.setAttribute('src', img.src);
    img.addEventListener('load', function() {
        var vibrant = new Vibrant(img, 64, 5);
        var swatches = vibrant.swatches();
        for (var swatch in swatches) {
            if (swatches.hasOwnProperty(swatch) && swatches[swatch]) {
                var color_name = swatch;
                var color_hex = swatches[swatch].getHex();
                //console.log(swatch, swatches[swatch].getHex());
                color_array[i] = color_hex;
                i++;
            }
        }
        ///console.log(color_array);
        useColorExtract(color_array);
        //return color_array;
    });
}

function useColorExtract(color_array) {
    var object = color_array;
    var parent = $('#image_data');
    ///console.log(color_array);
    NProgress.start();
    $.each(object, function(key, value) {
        //alert(key + ": " + value);
        $('#rule_color').show();
        $(parent).fadeIn();
        var content = '<div class="chip white-text" style="background:' + value + '">' + value + '</div>';
        $(parent).append(content);
        $('#color_btn').fadeOut();
    });
    NProgress.done();
}

//EXIF Data Reader
function exifReader(image) {
    var image = document.getElementById(image);
    var exif_array = [];
    var parent = $('#image_exif_data');
    NProgress.start();
    EXIF.getData(image, function() {
        exif_array = EXIF.pretty(this);
        //console.log(exif_array);
        var split_exif_array = split_string_regex(exif_array);
        $.each(split_exif_array, function(key, value) {
            $('#rule_exif').show();
            $(parent).fadeIn();
            var content = '<div class="chip lime lighten-3 grey-text text-darken-2">' + value + '</div>';
            $(parent).append(content);
            $('#exif_btn').fadeOut();
        })
    });
    NProgress.done();
}
//Split string on Exif data pattern
function split_string_regex(string) {
    var regex = /\w*\s:\s.*/g;
    var string_split = string.match(regex);
    return string_split;
}
/****************************************************************/
/********add chips ad identifiactions*******/
$(document).ready(function() {
    $('.chips').material_chip();
});
/************************************************/
/*************Write answer card toggle****************/
$(document).ready(function() {
    $('#write_answer').click(function() {
        $('#write_answer').addClass('animated zoomOut');
        $('#answer_card').slideDown();
        $('html, body').animate({
            scrollTop: $("#answer_card").offset().top - 60
        }, 1000);
    });
    $('#answer_close').click(function() {
        $('#answer_card').slideUp();
        $('#write_answer').removeClass('zoomOut');
        $('#write_answer').addClass('zoomIn');
    })
});
/********************************************************/
$(document).ready(function() {
    //Show text on view btn when mouse enter
    $('.hover-expand-view').mouseenter(function() {
        $(this).removeClass('btn-floating');
        $(this).addClass('lime-text text-darken-3');
        $(this).append('Add Notes');
    });
    //Reset view btn back to normal state
    $('.hover-expand-view').mouseleave(function() {
        $(this).addClass('btn-floating');
        $(this).removeClass('lime-text text-darken-3');
        $(this).text('');
        $(this).html('<i class="material-icons left lime-text text-darken-3">add</i>');
    });
    $('.hover-expand-view').click(function() {
        $('.hover-expand-view').hide();
        $('#notes, #notes_btn').show();
    });
    $('#note_close').click(function() {
        $('#notes, #notes_btn').hide();
        $('.hover-expand-view').fadeIn();
    });
});
/*****************************************************/
/*************Chip endorse****************/
/*$(document).ready(function() {
    var icon_up = $('.up');
    var icon_down = $('.down');
    var endorse = '<span class="lime darken-3 label_endorse">1</span>';
    $('.up').click(function() {
        $(icon_up).hide(function() {
            $(icon_down).show(function() {
                $(icon_down).after(endorse);
            });
        });
    });
    $('.down').click(function() {
        $('.label_endorse').remove();
        $(icon_down).hide(function() {
            $(icon_up).show();
        });
    });
});*/
/*********************************************/
$(document).ready(function(){
  if($('.label_endorse').html() == '' || $('.label_endorse').html() == 0){
    $('.label_endorse').hide();
  }
  else{
    $('.label_endorse').show();
  }
});
$(document).ready(function() {
    $('.endorse').click(function(e) {

    });
});
