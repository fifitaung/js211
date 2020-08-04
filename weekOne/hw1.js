'use strict'


// function to input something



// This is declaring and assigning a variable for the current date & time
const currentDate = () => {
    console.log("The current date & time " ,new Date());
}
currentDate();


const numToString = (someNum) => {
    console.log("input: ", someNum)
    console.log("type of input: " , typeof someNum);

    let num1 = toString(someNum);

    console.log("type of coverted: ", typeof num1);
    console.log("converted ", num1);


}
numToString(6868326);
numToString(-11.66);
numToString(12);

// covert string to a number 
const stringToNum = (someString) => {
    console.log("input: ", someString)
    console.log("type of input: " , typeof someString);

    let num = parseInt(someString);

    console.log("type of coverted: ", typeof num);
    console.log("converted ", num);


}
stringToNum("16");
stringToNum("-6774.7464");
stringToNum("Fifi");
stringToNum("seven")

// a JavaScript program that takes in different datatypes and prints out whether they are a:
// Boolean
// Null
// Undefined
// Number
// NaN
// String

const famousCharacter = "Yoda";
const famousNumber = 3.14;
const famousJSthing = NaN;
const famousBoolean = false;
const famousArray = [0, 1, 2, 3, 4];
const famousPersonObject = {name:'Fifi', age:25};
const famousJSValue = null;
const famousFunctionSignature = () => {
  return false
}

console.log( "This is  a " , typeof famousCharacter);
console.log( "This is  a " , typeof famousNumber);
console.log( "This is  a " , typeof famousJSthing);
console.log( "This is  a " , typeof famousBoolean);
console.log( "This is  a " , typeof famousArray);
console.log( "This is  a " , typeof famousPersonObject);
console.log( "This is  a " , typeof famousJSthing);
console.log( "This is  a " , typeof famousFunctionSignature);


// adds 2 numbers together

let addNum = (a, b) =>{
    return a + b 
}

console.log("Added numbers" ,addNum(10,287))

// const sumOfTwoNums = (x, y) =>{
//     if(x && y){
//       return (x + y)
//   }else{
//     return "not a number ,try a number "
//   }
// }

// console.log(sumOfTwoNums(87,9));


// runs only when 2 things are true



const bothAreTrue = (num1,num2) => {
  if (num1 === num2){
    return true
  } else {
    return false
  }
}

  console.log(bothAreTrue(10, 10));
  console.log(bothAreTrue(585, 3));



// runs when 1 of 2 things are true

const oneOrTwoTrue = (x,y) => {
    if (x || y){
      return true
    } else {
      return false
    }
  }
console.log(oneOrTwoTrue(2,2));


// THIS IS FROM THE TEXT BOOK FOR PRACTICE 
const myTruthyValue = 4;
const myFalsyValue = 0;
const mySecondValue = "";

const bothAreTruey = (arg1, arg2) =>{
  if(arg1 && arg2){  
    return true
  }else{
    return false
  }
}
console.log(bothAreTruey(myTruthyValue));

const jeans = true;
const shirt = false;

const oneTrue = (jeans, shirt) =>{
  if (jeans || shirt){
  return true
  }else{
    return "neither on is true"
  }
}
console.log(oneTrue(jeans,shirt));
// console.log(oneTrue(shirt,shirt));

const lemon = false;
const grape = true;

const neitherTrue = (lemon, grape) =>{
  if (lemon && grape){
  return true
  }else{
    return " neither is true"
  }
}
console.log(neitherTrue(lemon,grape));
