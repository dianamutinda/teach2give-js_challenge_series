//Create a function called sum that takes in two numbers as arguments and returns their sum.

let x;
let y;

function sum(x,y){
  console.log(x+y);

}
sum(3,2);
sum(-4,-8);
sum(-3,5);

//Write a function called nextNumber that takes in a number as an argument, increments it by 1 to find the next number, and then returns the next number.  

let num;

function nextNumber(num){
  console.log(num=num+1);
}
nextNumber(1);
nextNumber(0);
nextNumber(-2);

//Write a function called rectanglePerimeter that takes in the length and width as arguments and returns the perimeter of the rectangle.
let length;
let width;

function rectanglePerimeter(length,width){
  console.log((length+width)*2);
}
rectanglePerimeter(2,5);
rectanglePerimeter(3,5);
rectanglePerimeter(10,20);


//Write a function called returnSomethingToMe that returns the string "something" followed by a space " " followed by the string that was passed into the function.

function returnSomethingToMe(str){
    return `something ${str}`;
  }
  console.log(returnSomethingToMe("is better than nothing"))
  console.log(returnSomethingToMe("jack daniels"))
  console.log(returnSomethingToMe("pinocchio"))

  
  //Given two numbers, write a function called isSumMoreThan100 return true if their sum is greater than 100 and false if their sum is less than 100. 

  let num1;
  let num2;
  let sum2;

  function isSumMoreThan100(num1,num2){
    sum2 = num1+num2;
    if (sum2>100){
      console.log(true);
    }else (sum2<100);{
      console.log(false);
    }
  }
  isSumMoreThan100(25, 55);
  isSumMoreThan100(72, 38);

  
//Bob and Jane want to know who has a bigger BMI than the other. Write a function called greaterBMI that will take in as the first arguement the BMI of Bob and as the second Argument the BMI of Jane. If Bob has a bigger BMI than jane, your function should return the string "Bob", if Jane has a bigger BMI than Bob, it should return the string "Jane", if they have the same BMI, it should return the string "Equal". 

let bobBmi;
let janeBmi;

function greaterBMI(bobBmi,janeBmi){
  if(bobBmi>janeBmi){
    console.log("Bob");
  }else if (janeBmi>bobBmi){
    console.log("Jane")
  }else 
    console.log("Equal")
  }
  greaterBMI(30, 25);
  greaterBMI(35, 40);
  greaterBMI(35, 35);

  
  //You are counting points for a basketball game, 2 points are awarded for every 2 pointer and 3 points for every 3 pointer. Write a function called basketBallPoints, the first argument should be the number of two pointers scored by the team and the second argument the number of three pointers scored by the team. This function returns the final points for the team. 

  let twoPointers = 2;
  let threePointers = 3;

  function basketBallPoints(twoPointers,threePointers){
    console.log((twoPointers*2)+(threePointers*3));
  }
  basketBallPoints(1, 1);
  basketBallPoints(7, 5);
  basketBallPoints(0, 5);

   //Write a function called footballPoints that returns the number of points a football team has obtained so far, the first argument for this function is the number of games a team has won, the second argument is the number of games the team has drawn and the third arguement is the number of times the team has lost. 3 points are awarded for every game won, 1 point for every game draw and 0 points for  every game lost.  

   let won = 3;
   let drawn = 1;
   let lost = 0;
 
   function footballPoints(won,drawn,lost){
     return (3*won)+(1*drawn)+(0*lost);
   }
   console.log(footballPoints(5,0,2))
   console.log(footballPoints(0,0,2))
   console.log(footballPoints(5,2,0))

   //Write a function called isEven that takes in a number as an argument, the function returns true if a number is even and returns false if a number is odd. Use this function to log to the console all the even numbers between 0 and 101.

function isEven(number){
    return number%2 == 0;
}
function evenNumbers(){
    for(let i=0; i<=101; i++){
        if (isEven(i)){
            console.log(i)
        }
    }

}
evenNumbers()

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