function areSimilar(a, b) {
    var dif = [];
    for (var i = 0; i < a.length; i++) {
        if (a[i] != b[i]) {
            dif.push(i);
        }
    }
    if (dif.length > 2)
        return false;

    console.log(b);
    if (dif.length == 2) {
        var tmp = b[dif[0]];
        b[dif[0]] = b[dif[1]];
        b[dif[1]] = tmp;
    }
    for (var i = 0; i < a.length; i++) {
        if (a[i] != b[i]) {
            return false;
        }
    }
    console.log(b);

    console.log(dif);
    return true;
}
