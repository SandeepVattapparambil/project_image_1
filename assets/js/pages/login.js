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
