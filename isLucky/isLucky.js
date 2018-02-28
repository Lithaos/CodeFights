function isLucky(n) {
    var sum1 = 0;
    var sum2 = 0;
    var tab = n.toString().split('');
    var a = tab.length;
    for (var i = 0, e = a / 2; i < a / 2; i++, e++) {
        sum1 += parseInt(tab[i]);
        sum2 += parseInt(tab[e]);
    }
    if (sum1 == sum2)
        return true;
    else
        return false;
}
