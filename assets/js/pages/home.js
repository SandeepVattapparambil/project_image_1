/*****************home******************************/
$(document).ready(function() {
    console.log("App loaded !");
});
/**********image upload form hero toggle***********/
$(document).ready(function() {
    $('#img_upload_trigger').click(function() {
        $('#img_upload_trigger').fadeOut(function() {
            $('#img-upload-tabs').slideDown();
            $('ul.tabs').tabs('select_tab', 'test1');
        });
    });
});
$(document).ready(function() {
    $('#img-upload-close-1, #img-upload-close-2').click(function() {
        $('#img-upload-tabs').slideUp(function() {
            $('#img_upload_trigger').fadeIn();
        });
    });
});
/********************************************************/
