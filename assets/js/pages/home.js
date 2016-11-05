/*****************home******************************/
$(document).ready(function() {
    console.log("App loaded !");
});
/**********image upload form hero toggle***********/
$(document).ready(function() {
    $('#img_upload_trigger').click(function() {
        $('#img_upload_trigger').slideUp(function() {
            $('#img_upload_form').slideDown();
        });
    })
})
$(document).ready(function() {
    $('#close_img_upload').click(function() {
        $('#img_upload_form').slideUp(function() {
            $('#img_upload_trigger').fadeIn();
        });
    })
})
/******************************************************/
