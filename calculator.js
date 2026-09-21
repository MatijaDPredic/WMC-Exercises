// calculator without a browser

function conversionCheck(number) {
    return (isNaN(number) || !isFinite(number));
}
function add(number1, number2) {
    return number1 + number2;
}
function sub(number1, number2) {
    return number1 - number2;
}
function multiply(number1, number2) {
    return number1 * number2;
}
function divide(number1, number2) {
    return number1 / number2;
}

function operationRunner(cleanComponents) {
    const number1 = Number(cleanComponents[0]);
    const number2 = Number(cleanComponents[2]);

    if (conversionCheck(number1) || conversionCheck(number2)) {
        return "one of the numbers in not a number!!!!";
    }

    if (cleanComponents[1] === "+") {
        return "result: " + add(number1, number2);
    } else if (cleanComponents[1] === "-") {
        return "result: " + sub(number1, number2);
    } else if (cleanComponents[1] === "*") {
        return "result: " + multiply(number1, number2);
    } else if (cleanComponents[1] === (":" || "/")) {
        return "result: " + divide(number1, number2);
    } else {
        return "not a valid operator!!!";
    }
}

import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

// Pauses execution until user enters text and presses Enter
let goOn = true;
while (goOn)
{
const answer = await rl.question('NOTICE: space between the inputs is necessary!!! and 2 numbers max!!! \ninput a equation:');
if (answer.toLowerCase() === ("q" || "quit")) {
    goOn = false;
}

const components = answer.split(" ");
const cleanComponents = components.filter(item => item !== "");

if (cleanComponents.length === 3) {
    console.log(operationRunner(cleanComponents) );
} else if (cleanComponents.length > 3){
    console.log("too many");
} else {
    console.log("please space evenly!!! or its not enough!!!");
}

const number = Number(answer);
}
rl.close();