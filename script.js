document.addEventListener("DOMContentLoaded", function () {
  let displayValue = "";
  let answer = "";

  // Create a display at the top of the calculator
  const display = document.createElement("input");
  display.type = "text";
  display.readOnly = true;
  display.style.width = "250px";
  display.style.height = "40px";
  display.style.fontSize = "20px";
  display.style.textAlign = "right";
  display.style.marginBottom = "20px";
  display.style.paddingRight = "10px";
  document.querySelector(".basic").appendChild(display);

  const buttons = document.querySelectorAll(".num button");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const value = button.innerText;

      switch (value) {
        case "clear":
          displayValue = "";
          break;
        case "back space":
          displayValue = displayValue.slice(0, -1);
          break;
        case "=":
          try {
            answer = eval(displayValue);
            displayValue = answer.toString();
          } catch (e) {
            displayValue = "Error";
          }
          break;
        case "ans":
          displayValue += answer;
          break;
        default:
          displayValue += value;
      }

      display.value = displayValue;
    });
  });
});