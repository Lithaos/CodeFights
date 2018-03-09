function depositProfit(deposit, rate, threshold) {
    var i=0;
    do{
        deposit=deposit+deposit*rate/100;
        i++;
    }while(deposit<threshold)
    return i;
}
