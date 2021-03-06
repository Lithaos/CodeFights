function palindromeRearranging(inputString) {
    var letterCounts = {};
    var letter;
    var palindromeSum = 0;
    for (var i = 0; i < inputString.length; i++) {
        letter = inputString[i];
        letterCounts[letter] = letterCounts[letter] || 0;
        letterCounts[letter]++;
    }
    for (var letterCount in letterCounts) {
        palindromeSum += letterCounts[letterCount] % 2;
    }

    return palindromeSum < 2;
}
