//question 1
//Write a program to find maximum between two numbers.

var number1 = 7;  //Input
var number2 = 10;

if (number1 > number2) {
    console.log(`the maximum number will ${number1}`) //processing

}
else if (number2 > number1) {
    console.log(`the maximum number will ${number2}`)
}
else {
    console.log("Nothing")
}

//Output

//____________________________

//question 2
//Write a program to find maximum between three numbers.

var number1 = 12; //Input
var number2 = 15;
var number3 = 30;

if (number3 <= number1) {    //Processing 
    console.log(`the maximum number will ${number1}`)

}
else if (number3 <= number2) {
    console.log(`the maximum number will ${number2}`)
}
else if (number3 <= number3) {
    console.log(`the maximum number will ${number3}`)
}
else {
    console.log("No maximum number")
}

//Output

//_________________________________

//question 3
//Write a program to check whether a number is divisible by 5 and 11 or not.

var number = 9855754; //Input

if (number % 5 == 0) {
    console.log("Number is divisible by 5")
}
else if (number % 11 == 0) {
    console.log("Number is divisible by 11")
}
else {
    console.log("Number is not divisible by 5 amd 11 ")
}

//Output

//_________________________________


//question 4
//Write a program to check whether a number is negative, positive or zero.

var number = 8;


if (number > 0) {
    console.log("The number is positive");
}
else if (number == 0) {

    console.log("The number is zero");
}
else {
    console.log("The number is negative");

}

//_________________________________

//question 5
//Write a C program to check whether a number is even or odd.

var number = 9855754;  //Input

if (number % 2 == 0) {  // Processing
    console.log("even number")

}
else {
    console.log("Odd number ")
}

//_________________________________

//question 6
//Write a program to check whether a year is leap year or not.

var year = 2056; //Input 

if (year % 4 == 0) { // Processing
    console.log("leap year")

}
else {
    console.log("not a leap year")
}

//Output

//_________________________________

//question 7
//Write a C program to check whether a character is alphabet or not.




//_________________________________
//question 11
// switch questions // calcuator and check if letter is vowel (a,e,i,o,u) or not

// program for a simple calculator using javascript


var operator = prompt('Enter operator ( either +, -, * or / ): ');


var num1 = parseFloat(prompt('Enter first number: '));
var num2 = parseFloat(prompt('Enter second number: '));

var ans;


if (operator == '+') {
    ans = num1 + num2;
}
else if (operator == '-') {
    ans = num1 - num2;
}
else if (operator == '*') {
    ans = num1 * num2;
}
else {
    ans = num1 / num2;
}
console.log(`${num1} ${operator} ${num2} = ${ans}`);



