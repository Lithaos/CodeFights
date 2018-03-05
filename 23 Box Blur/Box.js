function boxBlur(image) {
    var tab = [];
    for (var i = 0; i < image.length - 2; i++) {
        var row = [];
        for (var j = 0; j < image[i].length - 2; j++) {
            var count = 0;
            var sum = 0;
            for (var a = i; a < i + 3; a++) {
                for (var b = j; b < j + 3; b++) {
                    sum += image[a][b];
                    count++;
                }
            }
            row.push(Math.floor(sum / count));
        }
        tab.push(row);
    }
    return tab;

}
