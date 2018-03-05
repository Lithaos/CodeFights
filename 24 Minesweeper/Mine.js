function minesweeper(matrix) {
    var tab = [];
    for (let i = 0; i < matrix.length; i++) {
        tab.push([]);
        for (var j = 0; j < matrix[i].length; j++) {
            tab[i][j] = 0;
            //above
            if (matrix[i][j - 1] === true) {
                tab[i][j]++;
            }
            //right
            if (matrix[i + 1] != undefined) {
                if (matrix[i + 1][j] === true) {
                    tab[i][j]++;
                }
            }
            //left
            if (matrix[i - 1] != undefined) {
                if (matrix[i - 1][j] === true) {
                    tab[i][j]++;
                }
            }
            //below
            if (matrix[i][j + 1] != undefined) {
                if (matrix[i][j + 1] === true) {
                    tab[i][j]++;

                }
            }
            //left-top
            if (matrix[i - 1] != undefined) {
                if (matrix[i - 1][j - 1] === true) {
                    tab[i][j]++;
                }
            }
            //right top    
            if (matrix[i - 1] != undefined) {
                if (matrix[i - 1][j + 1] === true) {
                    tab[i][j]++;
                }
            }
            //left bottom
            if (matrix[i + 1] != undefined) {
                if (matrix[i + 1][j - 1] === true) {
                    tab[i][j]++;
                }
            }
            //right bottom
            if (matrix[i + 1] != undefined) {
                if (matrix[i + 1][j + 1] === true) {
                    tab[i][j]++;
                }

            }
        }
    }

    return tab;
}
