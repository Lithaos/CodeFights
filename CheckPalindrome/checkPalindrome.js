function checkPalindrome(inputString) {
    var palindrome = false;
    for (var i = 0; i < inputString.length / 2; i++) {
        if (inputString[i] == inputString[inputString.length - i - 1])
            palindrome = true;
        else return false;
    }
    if (palindrome == true)
        return true;
}
