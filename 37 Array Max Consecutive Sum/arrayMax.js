function arrayMaxConsecutiveSum(inputArray, k) {
    var sum=0;
    var sum2=0;
    for(var i=0;i<inputArray.length;i++)
        {
               sum+= inputArray[i];
            if(i>=k) sum-= inputArray[i-k];
            if(sum>sum2) sum2 =sum;
        }
            return sum2;
}
