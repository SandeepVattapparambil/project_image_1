/*****************Login******************************/
$(document).ready(function() {
    loadpage();
    console.log("App loaded !");
});

function loadpage() {
    /*Detect Mobile & Handheld*/
    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };
    /*if mobile then show loader*/
    if (isMobile.any()) {
        //alert("This is a Mobile Device");
        $(".device-loader").fakeLoader({
            timeToHide: 1200, //Time in milliseconds for fakeLoader disappear
            zIndex: "9999", //Default zIndex
            //spinner: "spinner1", //Options: 'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7'
            bgColor: "#cddc39 ", //Hex, RGB or RGBA colors
            imagePath: "assets/images/logo.png" //If you want can you insert your custom image
        });
        console.log('Mobile!');
    }
}
/***************************************************/
