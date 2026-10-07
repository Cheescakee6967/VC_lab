const display = document.getElementById("display");
const buttons = document.querySelector(".buttons");

let expression = "";

buttons.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;

  const value = button.dataset.value;
  const action = button.dataset.action;

  if (action === "clear") {
    expression = "";
    display.value = "0";
    return;
  }

  if (action === "delete") {
    expression = expression.slice(0, -1);
    display.value = expression || "0";
    return;
  }

  if (action === "calculate") {
    try {
      const result = Function(`"use strict"; return (${expression})`)();
      expression = String(result);
      display.value = expression;
    } catch {
      expression = "";
      display.value = "Error";
    }
    return;
  }

  if (value) {
    expression += value;
    display.value = expression;
  }
});
