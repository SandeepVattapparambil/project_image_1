/*****************Login******************************/
$(document).ready(function() {
    console.log("App loaded !");
});
/***************************************************/
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
}
/********************************/
/*****set width of button on login card*/
$(document).ready(function() {
    var width = $('#facebook').width() + 50;
    if (isMobile.any()) {
        $('#google, #twitter, #facebook, #email').width(width - 30);
    } else {
        $('#google, #twitter, #facebook, #email').width(width);
    }
});
/**********************************************/
/**********************************************/
$(document).ready(function() {
    $('#submit').click(function(e) {
        e.preventDefault();
        var user_name = $('#user_name').val();
        var password = $('#password').val();
        //if both empty
        if (user_name == '' && password == '') {
            $('#username_div').pulsate({
                color: "#ffeb3b ", // set the color of the pulse
                reach: 5, // how far the pulse goes in px
                speed: 300, // how long one pulse takes in ms
                pause: 0, // how long the pause between pulses is in ms
                glow: true, // if the glow should be shown too
                repeat: false, // will repeat forever if true, if given a number will repeat for that many times
                onHover: false
            });
            $('#password_div').pulsate({
                color: "#ffeb3b ", // set the color of the pulse
                reach: 5, // how far the pulse goes in px
                speed: 300, // how long one pulse takes in ms
                pause: 0, // how long the pause between pulses is in ms
                glow: true, // if the glow should be shown too
                repeat: false, // will repeat forever if true, if given a number will repeat for that many times
                onHover: false
            });
        }
        //if only password empty
        else if (user_name != '' && password == '') {
            $('#password_div').pulsate({
                color: "#ffeb3b ", // set the color of the pulse
                reach: 5, // how far the pulse goes in px
                speed: 300, // how long one pulse takes in ms
                pause: 0, // how long the pause between pulses is in ms
                glow: true, // if the glow should be shown too
                repeat: false, // will repeat forever if true, if given a number will repeat for that many times
                onHover: false
            });
        }
        //if only username empty
        else if (user_name == '' && password != '') {
            $('#username_div').pulsate({
                color: "#ffeb3b ", // set the color of the pulse
                reach: 5, // how far the pulse goes in px
                speed: 300, // how long one pulse takes in ms
                pause: 0, // how long the pause between pulses is in ms
                glow: true, // if the glow should be shown too
                repeat: false, // will repeat forever if true, if given a number will repeat for that many times
                onHover: false
            });
        }
        else {
            //send data to form via ajax
        }
    });
});
