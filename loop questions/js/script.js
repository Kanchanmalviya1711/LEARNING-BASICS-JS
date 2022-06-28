console.log("testing")


// 1 Write a program to print numbers from 1 to 10.

for (var i = 1; i <= 10; i++) {
    console.log(i);

}

// 2 Write a program to calculate the sum of first 10 natural number.

var sum = 0

for (var i = 1; i <= 10; i++) {

    sum += i
    console.log(sum += i);

}

//3 Write a program that prompts the user to input a positive integer. 
//It should then print the multiplication table of that number. 

var number = parseInt(prompt(' number: '));

for (var i = 1; i <= 10; i++) {
    var result = i * number;
    console.log(`${number} * ${i} = ${result}`);
}


// 4 Write a program to find the factorial value of any number entered through the keyboard. 

function factorial(n) {
    var answer = 1;
    if (n == 0 || n == 1) {
        return answer;
    } else {
        for (var i = n; i >= 1; i--) {
            answer = answer * i;
        }
        return answer;
    }
}
var n = 2;
answer = factorial(n)
console.log("The factorial of " + n + " is " + answer);  // 2*1 = 2



//7 Write a program that reads a set of integers, and then prints the sum of the even and odd integers.
for (var i = 0; i <= 10; i++) {

    if (i % 2 === 0) {
        console.log(i + " is even");
    }
    else {
        console.log(i + " is odd");
    }
}

