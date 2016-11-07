/*****************home******************************/
$(document).ready(function() {
    console.log("App loaded !");
});
/**********image upload form hero toggle***********/
/********************************************************/
$(document).ready(function() {
    $('#img_upload').click(function() {
        $('#dropzone_form').fadeIn(function() {
            $('#url_upload').fadeOut();
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
            $('#img_upload').fadeOut();
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
