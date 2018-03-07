function chessBoardCellColor(cell1, cell2) {
    cell1 = cell1.toLowerCase()
    cell2 = cell2.toLowerCase();
    if (cell1.charCodeAt(0) % 2 == 1)
        x = cell1[1] % 2 == 1 ? 1 : 0
    else
        x = cell1[1] % 2 == 1 ? 0 : 1

    if (cell2.charCodeAt(0) % 2 == 0)
        y = cell2[1] % 2 == 0 ? 1 : 0;
    else
        y = cell2[1] % 2 == 0 ? 0 : 1;

    if (x == y)
        return true;
    else
        return false;
}
