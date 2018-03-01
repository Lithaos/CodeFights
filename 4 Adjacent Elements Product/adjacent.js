function adjacentElementsProduct(inputArray) {
    var wynik
    for (var i = 0; i < inputArray.length - 1; i++) {
        if (inputArray[i] * inputArray[i + 1] > wynik) {
            wynik = inputArray[i] * inputArray[i + 1];
        }
    }
    return wynik;
}
