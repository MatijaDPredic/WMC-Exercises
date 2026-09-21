// Conceptual Questions

// Q1. What is the difference between let, const JavaScript?
// A1. let variables are changeable after initialization, const variables are not.

// Q2. What is the difference between == and === in JavaScript?
// A2. == checks the values and converts them if needed for the comparison,
// === does a deeper comparison and compares the types as well

// Q3. What is the difference between null and undefined in JavaScript?
// A3. null is a value assigned by the Dev, undefined happens when the Dev forgets to initialize one
// it doesn't happen with const
const empty = null;
let empty2;
console.log(empty);
console.log(empty2);

// Q4. What data types exist in JavaScript?
// A4. number,string,boolean,object

// Q5. How to check the type of a variable in JavaScript?
// A5. with typeof
console.log(typeof empty);

// Q6. What are primitive data types in JavaScript?
// A6. String, Number, BigInt, Boolean, Undefined, Null, Symbol.

// Q7. What is an object in JavaScript?
// A7. An object in JavaScript is a container that groups related data and functionality.
// It stores data as key–value pairs

// Q8. How to create an object in JavaScript?
// A8. there are multiple ways examples:

const window = {
    material: "aluminium",
    price: 500
}
console.log(window);

/*const window = new Object();
window.material = 'aluminium';
window.price = 500;
*/

// Q9. What is a function in JavaScript?
// A9. is a reusable block of code

// Q10. How do you define a function in JavaScript?
// A10. function name(){}

// Q11. Can a function return undefined? If so, how?
// A11.

function test(){
    return;
}
console.log(test());

// Q12. What is NaN in JavaScript?
// A12. is a not representable or invalid results of an arithmetic operation

// Q13. How to convert a string to a number in JavaScript?
// A13. Number() would be one way.

// Type System

// Q1. What is the difference between dynamic and static typing?
// A1. dynamic typing allows for inferred data types static does not

// Q2. What is the difference between weak and strong typing?
// A2. strong type does not allow incompatible data type operations
// the weak type languages treat such collisions not by checking before
// compiling but by converting the easier value to convert

// Q3. Why in JavaScript a variable can change types? Give an example.
// A3. because JS coverts values to prevent exceptions my guess

// Q4. Why in JavaScript an expression can change types? Give an example.
// A4. because JSs implicit type coercion

// Q5. What are the pros and cons of allowing type coercion in JavaScript?
// A5. Pro: it will always run Con: it will always run

// Q6. Why might strong typing be preferred in large-scale applications?
// A6. to prevent unnoticed mistakes and ensure syntax errors don't get to production

// Type Coercion

// Q1. Explain what is happening when comparing 42 == "42"?
// A1. The == operator performs loose equality so it will output true

// Q2. Explain what is happening when comparing 42 === "42"?
// A2. The === operator performs strict equality so it will output false

// Q3. Explain what is happening when comparing true == 1?
// A3. true will be converted to 1 so it will output true

// Q4. Explain what is happening when comparing true === 1?
// A4. same es A2.

// Q5. Explain what is happening when doing (2+"2") + 2?
// A5. in the () JS will perform a concat because its easier and the same with + 2 so the result be "222"

// Q6. Explain what is happening when doing (2+"2") - 2?
// A6. in the () JS will perform a concat because its easier and it will subtract 2 because the - is an arithmetic operator

// Q7. What is the output of the following examples?
// console.log(null + 1)
// null converted to 0 so it will be 1
// console.log("5" * 2)
// "5" converted to 5 so it will be 10
// console.log(true + false)
// both will be converted to numbers so it will be 1

// Type Conversion

// Q1. How to convert a string to a number?
// A1. with Number()
// Q2. How to convert a number to a string?
// A2. with String()
// Q3. How to convert a pixel value e.g. 255px to a number?
// A3. parseInt() or parseFloat()
// Q4. Prompt the user to enter a number and convert it to a number and log it to the console.
// A4.
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

// Pauses execution until user enters text and presses Enter
const answer = await rl.question('input a number ');
console.log(typeof answer);
const number = Number(answer);
console.log(typeof number);

rl.close();

// Strings

// E1. Create a string using string concatenation with the following message:
// Hello, my name is <your name>.
// Test 1 Log the string to the console.

const name = "Matija";
console.log("Hello, my name is " + name );

// E2. Create a string using template literal with the following message:
// Hello, my name is <your name>.
// Test 1 Log the string to the console.

console.log(`Hello, my name is ${name}`);

// E3. Create a string in an exotic language and check the length of the string.
// Test 1 Log the string to the console.
// Test 2 Log the length of the string to the console.

const text = "こんにちは世界";
console.log(text);
console.log("Length of the text: " + text.length );

// Functions

// E1. Write a function greet that takes name parameter.
// The function should return a greeting message including the name parameter.
// If the parameter is not a string it should return null.
// Test 1 the function by calling it with ('John') and logging the result to the console.
// Test 2 the function by calling it with (25) and logging the result to the console.

function greet(name) {
    if (typeof name === "string") {
        return `Hello, ${name}`;
    } else {
        return null;
    }
}
console.log(greet("John"));
console.log(greet(25));


// E2. Write a function add that takes two parameters.
// The function should return the sum of the two numbers.
// If the parameters are not numbers it should return null.
// Test 1 the function by calling it with two numbers (5, 3) and logging the result to the console.
// Test 2 the function by calling it with two strings ('5', '3') and logging the result to the console.

function numberChecker(number) {
    return typeof number === "number";
}


function add(num1, num2) {
    if (numberChecker(num1) && numberChecker(num2)) {
            return num1 + num2;
    } else {
        return null;
    }
}

console.log(add(1,1));
console.log(add("2","2"));

// E3. Write a function subtract that takes two parameters.
// The function should return the difference of the two numbers.
// If the parameters are not numbers it should return null.
// Test 1 the function by calling it with two numbers (5, 3) and logging the result to the console.
// Test 2 the function by calling it with two strings ('5', '3') and logging the result to the console.

function sub(num1, num2) {
    if (numberChecker(num1) && numberChecker(num2)) {
        return num1 - num2;
    } else {
        return null;
    }
}

console.log(sub(1,1));
console.log(sub("2","2"));

// E4 🤩. Write a function calculate that takes three parameters num1, num2, and operation.
// The function should return the result of the operation on the two numbers.
// The operation can be one of the following: add, subtract, multiply, divide.
// If the parameters are not numbers it should return null.
// If the operation is not one of the above it should return null.
// Test 1 the function by calling it with (5, 3, 'add') and logging the result to the console.
// Test 2 the function by calling it with (5, 3, 'subtract') and logging the result to the console.
// Test 3 the function by calling it with (5, 3, 'multiply') and logging the result to the console.
// Test 4 the function by calling it with (5, 3, 'divide') and logging the result to the console.
// Test 5 the function by calling it with (5, 3, 'modulus') and logging the result to the console.

function calculate(num1, num2, operator) {
    switch (operator) {
        case "add":
            return num1 + num2;
        case "subtract":
            return num1 - num2;
        case "multiply":
            return num1 * num2;
        case "divide":
            return num1 / num2;
        case "modulus":
            return num1 % num2;
        default:
            return null;
    }
}

console.log("-----------------------");
console.log(calculate(1,2, "add"));
console.log(calculate(1,2, "subtract"));
console.log(calculate(1,2, "multiply"));
console.log(calculate(1,2, "divide"));
console.log(calculate(1,2, "modulus"));
console.log(calculate(1,2, ""));

// E5. Write a function getNumberFromUser that prompts the user to enter a number and returns the number.

// The function should prompt the user to enter a number (use prompt).
// The function should return the number entered by the user as type number. (use Number)
// If the user enters a value that is not a number it should return null.
// Test 1 Call the function and provide a valid number and log the result to the console.
// Test 2 Call the function and provide an invalid number and log the result to the console.

// E6 🤩. Extend the getNumberFromUserfunction that loops until the user enters a valid number.
// The function should keep prompting the user to enter a number until a valid number is entered.

// E7 🤯. Combine the calculate and getNumberFromUser functions to create a simple calculator.

// The calculator should prompt the user to enter two numbers and an operation.
// The calculator should then calculate the result and log it to the console.
// The calculator should keep running until the user enters exit.
// Test 1 Run the calculator and test the functionality.

//Objects

//E1. Create an object person with the following properties:
//
// name of type string
// age of type number
// isStudent of type boolean
// Test 1 Log the object to the console.
// E2. Create an object game with the following properties:
//
// playerName of type string
// score of type number
// rank of type number
// isAlive of type boolean
// Test 1 Log the object to the console.
// E3. Add the following methods to the game object.
//
// updateScore that takes one parameter and updates the score property.
// reset that resets the score, rank, and isAlive properties to their default values.
// Test 1 the updateScore method by calling it with a number and logging the object to the console.
// Test 2 the reset method by calling it and logging the object to the console.
// E4. Write a function createPerson that takes two parameters name and age.
//
// The function should return a person object with the properties name and age from the parameters.
// If the parameters are not a string and a number it should return null.
// Test 1 the function by calling it with ('John', 25) and logging the result to the console.
// Test 2 the function by calling it with (25, 'John') and logging the result to the console.

// Arrays

// E1. Create an array numbers with the following numbers: 1, 2, 3, 4, 5.
//
// Test 1 Log the array to the console.
// E2. Add the number 6 to the end of the numbers array.
//
// Test 1 Log the array to the console.
// E3. Create a function sum that takes an numbers array and returns the sum of the numbers.
//
// Test 1 Call the function with the numbers array and log the result to the console.
// Test 2 Call the function with an empty array and log the result to the console.
// Test 3 🧐 Call the function with a strings array and log the result to the console.