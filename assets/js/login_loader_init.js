/*****************Login******************************/

$(document).ready(function() {
    loadPage();
    console.log("App loaded !");
});
/***************************************************/
function loadPage() {
    console.log("Identify device");
    var device = getDeviceType();
    if (device != '') {
        console.log("Device identified as a Mobile");
        $(".device-loader").fakeLoader({
            timeToHide: 1200, //Time in milliseconds for fakeLoader disappear
            zIndex: "9999", //Default zIndex
            //spinner: "spinner1", //Options: 'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7'
            bgColor: "#cddc39 ", //Hex, RGB or RGBA colors
            imagePath: "assets/images/logo.png" //If you want can you insert your custom image
        });
    } else {
        console.log("Device identified as PC");
    }
}

function getDeviceType() {
    if (navigator.userAgent.match(/Android/i)) {
        var device = 'Android';
        return device;
    } else if (navigator.userAgent.match(/BlackBerry/i)) {
        var device = 'Blackberry';
        return device;
    } else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
        var device = 'iOS';
        return device;
    } else if (navigator.userAgent.match(/Opera Mini/i)) {
        var device = 'Opera';
        return device;
    } else if (navigator.userAgent.match(/IEMobile/i)) {
        var device = 'Windows';
        return device;
    } else {
        var device = '';
        return device;
    }
}
