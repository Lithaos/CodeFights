function isIPv4Address(inputString) {
    inputString = inputString.split('.');
    if (inputString.length !== 4) return false;
    for (i in inputString) {
        var z = parseInt(inputString[i]);
        if (z > 255 || z < 0 || inputString[i] == '' || isNaN(inputString[i]))
            return false;
    }
    return true;
}
