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
        $.each(split_exif_array, function(key, value){
          $('#rule_exif').show();
          $(parent).fadeIn();
          var content = '<div class="chip lime lighten-3 grey-text text-darken-2">'+value+'</div>';
          $(parent).append(content);
          $('#exif_btn').fadeOut();
        })
    });
    NProgress.done();
}
//Split string on Exif data pattern
function split_string_regex(string) {
    var regex =/\w*\s:\s.*/g;
    var string_split = string.match(regex);
    return string_split;
}
