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
