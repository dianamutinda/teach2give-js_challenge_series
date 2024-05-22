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