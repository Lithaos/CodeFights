function sortByHeight(a) {

    var tab = [];
    var tab2 = [];
    for (var i = 0; i < a.length; i++) {
        if (a[i] != -1)
            tab.push(a[i]);
        else {
            tab2.push(i);

        }
    }

    tab.sort(function (a, b) {
        return a - b
    });
    for (var j = 0; j < a.length; j++) {
        if (tab2.indexOf(j) !== -1) {
            tab.splice(j, 0, -1);
        }
    }
    return tab;
}
