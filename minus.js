let display = document.getElementById("display");
let buttons = document.querySelectorAll(".btn[data-value]");
let minusBtn = document.getElementById("minus");
let equalsBtn = document.getElementById("equals");

let clearOneBtn = document.getElementById("clear-one");
let clearAllBtn = document.getElementById("clear-all");

let expression = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        expression += button.getAttribute("data-value");
        display.value = expression;
    });
});

minusBtn.addEventListener("click", () => {
    if (expression !== "" && expression.slice(-1) !== "-") {
        expression += "-";
        display.value = expression;
    }
});

clearOneBtn.addEventListener("click", () => {
    expression = expression.slice(0, -1);
    display.value = expression;
});

clearAllBtn.addEventListener("click", () => {
    expression = "";
    display.value = "";
});

function customMinus(expr) {
    let numbers = expr.split("-").map(Number);

    let result = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        result -= numbers[i];
    }
    return result;
}

equalsBtn.addEventListener("click", () => {
    if (expression !== "") {
        try {
            let result = customMinus(expression);
            display.value = result;
            expression = result.toString();
        } catch {
            display.value = "Error";
            expression = "";
        }
    }
});
