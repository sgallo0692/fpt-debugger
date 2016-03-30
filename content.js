function getMonetate() {
    if (typeof window.monetate !== "undefined") {
        console.log('line 5', window.monetate.redirect);
    } else {
        console.log('monetate else', typeof window.monetate);
        setTimeout(getMonetate, 250);
    }
}

var monetateRedirect = getMonetate();
console.log('monetate.redirect', monetateRedirect);
//var regex = monetateRedirect.rules[0].value;
