function alphabeticShift(inputString) {
    var slowo = '';
    for (var i = 0; i < inputString.length; i++) {
        var a = inputString.charCodeAt(i) + 1;
        if (a == 123)
            a = 97;
        a = String.fromCharCode(a);
        slowo += a;
    }
    return slowo;
}
