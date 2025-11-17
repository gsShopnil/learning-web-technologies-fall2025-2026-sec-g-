let display = document.getElementById("display");
let buttons = document.querySelectorAll(".btn[data-value]");
let plusBtn = document.getElementById("plus");
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

plusBtn.addEventListener("click", () => {
    if (expression !== "" && expression.slice(-1) !== "+") {
        expression += "+";
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
function customAdd(expr) {
    let numbers = expr.split("+").map(Number);
    return numbers.reduce((a, b) => a + b, 0);
}
equalsBtn.addEventListener("click", () => {
    if (expression !== "") {
        try {
            let result = customAdd(expression);
            display.value = result;
            expression = result.toString();
        } catch {
            display.value = "Error";
            expression = "";
        }
    }
});
