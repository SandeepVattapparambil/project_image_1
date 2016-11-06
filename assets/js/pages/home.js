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
/*hide profile image from context card when card reveal*/
$(document).ready(function(){
  $('#hide-profile-img').click(function(){
    var image_element = $(this).parent().closest('div').children('img');
    $(image_element).destroy();
  });
});
/*bring back profile image when card reveal closed*/
$(document).ready(function(){
  $('#card-reveal-close').click(function(){
    var image_element = $('#hide-profile-img').parent().closest('div').children('img');
    $(image_element).append();
  });
});
