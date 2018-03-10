function absoluteValuesSumMinimization(a) {
       var x=0;
       if(a.length%2==0)
              {
                     x=a[Math.floor((a.length-1)/2)];
                
              }
       else
              {
               x=a[Math.floor(a.length/2)];
              }
       return x;
}
