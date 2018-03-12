function extractEachKth(inputArray, k) {
    var ind=1;
    var tab=[]
    for(var i=0;i<inputArray.length;i++){
        
                if(ind*k<=inputArray.length){
                    tab.push(ind*k);
                    ind++;
                }

    }
    console.log(tab);
    for(var a=0;a=tab.length;a++)
        { 
            console.log(tab[tab.length-1]);
            inputArray.splice(tab[tab.length-1]-1,1);
            tab.pop();
        }
    if(k==1)
        inputArray=[];
      return inputArray;
}
