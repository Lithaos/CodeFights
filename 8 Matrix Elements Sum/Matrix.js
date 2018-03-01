function matrixElementsSum(matrix) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] != 0 && i == 0) {
                sum += matrix[i][j];
            } else if (i > 0 && matrix[i - 1][j] == 0)
                matrix[i][j] = 0;
            else
                sum += matrix[i][j];
        }
        console.log("Lvl " + i + " " + sum)
    }
    return sum;
}
