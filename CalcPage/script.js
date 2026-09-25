

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


const again = document.getElementById("again");
again.onclick = () => {
    let test = prompt("NOTICE: space between the inputs is necessary!!! and 2 numbers max!!! \ninput a equation:", "0 + 0");
    const log = document.querySelector("#log");

    const components = test.split(" ");
    const cleanComponents = components.filter(item => item !== "");

    if (cleanComponents.length === 3) {
        log.textContent = `${operationRunner(cleanComponents)}`;
    } else if (cleanComponents.length > 3){
        log.textContent = "too many";
    } else {
        log.textContent = "please space evenly!!! or its not enough!!!";
    }
}




