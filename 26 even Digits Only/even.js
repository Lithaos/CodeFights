function evenDigitsOnly(n) {
    n = n.toString();
    n = n.split("");
    for (var i = 0; i < n.length; i++) {
        if (n[i] % 2 != 0)
            return false;
    }
    return true;
}
