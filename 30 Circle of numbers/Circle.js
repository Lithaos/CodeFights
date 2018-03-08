function circleOfNumbers(n, firstNumber) {
    x = firstNumber + n / 2;
    if (x > n) {
        x = x % n;
    }
    if (x == n)
        x = 0;
    return x;
}
