$(document).ready(function() {

    function getMonetate() {
        if (typeof monetate !== "undefined") {
            return monetate.redirect;
        } else {
            setTimeout(getMonetate, 250);
        }
    }

    var monetateRedirect = getMonetate();
    console.log('monetate.redirect', monetateRedirect);
    //var regex = monetateRedirect.rules[0].value;

    function getRegex() {
        if (regex) {
            return regex;
        }
    }

    function logValues() {
        console.log(getRegex);
    }

    logValues();
});
