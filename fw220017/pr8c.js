  n=10;
     for (let i = 1;i<=n;i++){
         bag = "";
        
        for(let j= 1;j<=n;j++){
          if (i==1||i==10||j==1||j==10){
            bag = bag + "*"
          }else{
             bag =bag +" ";
          }
     
        }console.log(bag);
         
     }
   
    