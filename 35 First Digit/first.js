function firstDigit(inputString) {
    inputString=inputString.split('');
    for(var i=0;i<inputString.length;i++){
        console.log(parseInt(inputString));
        if(Number.isInteger(parseInt(inputString[i])))
            return inputString[i];
        
            
    }
    console.log(inputString);
}
