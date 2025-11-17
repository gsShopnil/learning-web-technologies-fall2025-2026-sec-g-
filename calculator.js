let display = document.getElementById("display");
let numButtons = document.querySelectorAll(".btn[data-value]");
let opButtons = document.querySelectorAll(".operator");
let equalsBtn = document.getElementById("equals");
let clearOneBtn = document.getElementById("clear-one");
let clearAllBtn = document.getElementById("clear-all");

let expression = "";

numButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        expression += btn.getAttribute("data-value");
        display.value = expression;
    });
});

opButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        let op = btn.getAttribute("data-op");
        if (expression !== "" && !["+", "-", "×", "÷"].includes(expression.slice(-1))) {
            expression += op;
            display.value = expression;
        }
    });
});
clearOneBtn.addEventListener("click", () => {
    expression = expression.slice(0, -1);
    display.value = expression;
});
clearAllBtn.addEventListener("click", () => {
    expression = "";
    display.value = "";
});
function customEval(expr) {
    let numbers = expr.split(/[\+\-\×\÷]/).map(Number);
    let operators = expr.replace(/[0-9]/g, '').split('');

    for (let i = 0; i < operators.length; i++) {
        if (operators[i] === "×") {
            numbers[i] = numbers[i] * numbers[i + 1];
            numbers.splice(i + 1, 1);
            operators.splice(i, 1);
            i--;
        }
        else if (operators[i] === "÷") {
            numbers[i] = numbers[i] / numbers[i + 1];
            numbers.splice(i + 1, 1);
            operators.splice(i, 1);
            i--;
        }
    }
    let result = numbers[0];
    for (let i = 0; i < operators.length; i++) {
        if (operators[i] === "+") result += numbers[i + 1];
        if (operators[i] === "-") result -= numbers[i + 1];
    }

    return result;
}
equalsBtn.addEventListener("click", () => {
    if (expression !== "") {
        try {
            let result = customEval(expression);
            display.value = result;
            expression = result.toString(); 
        } catch {
            display.value = "Error";
            expression = "";
        }
    }
});
