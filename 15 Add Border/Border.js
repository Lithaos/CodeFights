function addBorder(picture) {
     var dl=picture[0].length;
     var str='';
     for(var j=0;j<dl+2;j++)
          {
               str+='*';
          }
     console.log(str);
     for(var i=0;i<picture.length;i++)  
          {
               if(i==0)
                    {
                         picture.unshift(str); 
                    }
               if(i>0)
                    {
                         picture[i]='*'+picture[i]+'*';
                    }
                        
          }
     picture.push(str);
     return (picture);
}
