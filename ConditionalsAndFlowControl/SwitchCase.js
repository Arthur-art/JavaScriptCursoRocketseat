let expression = "";

switch (expression) {
  case "a":
    console.log("primeiro caso");
    break;

  case "b":
    console.log("segundo caso");
    break;

  case "c":
    console.log("terceiro caso");
    break;

  default:
    console.log("default");
    break;
}

function operator(num1, operador, num2 ) {
  let result = 0;

  switch (operador) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
  }
  return result;
}

console.log(operator(12,"+",12));