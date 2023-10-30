//convert celcius to farenheit
const celcius= 60
const celciustoFarenheit = (celcius*(9/5)) +32
console.log(celciustoFarenheit)

//check number odd or even
// 25 --> odd 2--> even
// program to check if the number is even or odd
// take input from the user
const number = 25
const number2 = 2
// ternary operator
const result = (number % 2  == 0) ? "even" : "odd";
const result2 = (number2 % 2  == 0) ? "even" : "odd";
// display the result
console.log(result)
console.log(result2)
// https://www.programiz.com/javascript/examples/even-odd

//prime number or not 6 dan 7
// program to check if a number is prime or not

// take input from the user
// program to check if a number is prime or not

// take input from the user
let number = parseInt(prompt("Enter a positive number: "));
let isPrime = true;

// check if number is equal to 1
if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (number > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}

// check if number is less than 1
else {
    console.log("The number is not a prime number.");
}


