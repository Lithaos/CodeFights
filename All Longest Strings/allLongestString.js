function allLongestStrings(inputArray) {
    var tablica = []
    inputArray.sort(function (a, b) {
        return b.length - a.length;
    })[0];
    for (var i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length == inputArray[0].length)
            tablica.push(inputArray[i]);
    }
    return tablica;
}
