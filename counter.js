

  //Given that 1 minute is equal to 60 seconds. Write a function called convertToSeconds that takes in the number of minutes as an arguments and returns the seconds equivalent in the format ```x seconds``` e.g 120 seconds, 300 seconds. e.t.c. If the seconds equivalent is 0, then it should just return 0, if the seconds equivalent is 1, then it should return 1, if the seconds equivalent is more than 1, then it should return with the string "seconds"  


  //Write a function called greater that takes in three numbers as arguments and returns the greatest number among the three. If they are all equal, it should return any of them.  

  let a;
  let b;
  let c;

  function greater(a,b,c){
    if(a>b && a>c){
        return a;
    }else if(b>a && b>c){
        return b;
    }else if(c>a && c>b){
        return c;
    }else{
        return a,b,c;
    }
  }
  console.log(greater(2,35,9))
  console.log(greater(23,23,23))
  //Write a function called least that takes in three numbers as arguments and returns the least among the three. If they are all equal, it should return any of them
   
   let m;
   let n;
   let o;
 
   function greater(a,b,c){
     if(m<n && m<o){
         return a;
     }else if(n<m && n<o){
         return n;
     }else if(o<m && o<n){
         return o;
     }else{
         return m,n,o;
     }
   }
   console.log(greater(2,35,9))
   console.log(greater(23,23,23))


  
  
