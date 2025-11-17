let display = document.getElementById("display");
let buttons = document.querySelectorAll(".btn[data-value]");
let multiplyBtn = document.getElementById("multiply");
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
multiplyBtn.addEventListener("click", () => {
    if (expression !== "" && !["×"].includes(expression.slice(-1))) {
        expression += "×";
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
function customMultiply(expr) {
    let numbers = expr.split("×").map(Number);

    let result = 1;
    numbers.forEach(num => {
        result *= num;
    });

    return result;
}
equalsBtn.addEventListener("click", () => {
    if (expression !== "") {
        try {
            let result = customMultiply(expression);
            display.value = result;
            expression = result.toString();
        } catch {
            display.value = "Error";
            expression = "";
        }
    }
});
