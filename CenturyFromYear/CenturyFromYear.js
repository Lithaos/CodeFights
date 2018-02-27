function centuryFromYear(year) {
    if (year % 100 >= 1) {
        if (year % 100 >= 50)
            return Math.round(year / 100);
        else
            return Math.round(year / 100) + 1;
    } else return Math.round(year / 100);
}
console.log(1988 / 100);
