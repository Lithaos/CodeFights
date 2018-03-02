function alternatingSums(a) {
    var t = [0, 0];
    a.forEach(function (a, i) {
        if (i % 2 == 0)
            t[0] += a;
        else
            t[1] += a;
    })
    return t;
}
