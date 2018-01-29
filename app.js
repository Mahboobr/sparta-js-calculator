var CalcType = prompt("Which type of calculator would you like to use? Basic(b) or Advanced(a)");

var total = 0;
if (CalcType == "b") {
  var InputNum = prompt("Input 1st number");
  var num1 = parseInt(InputNum, 10);

  var operator = prompt("Select operator. + - / *");

  var InputNum2 = prompt("Input 2nd number");
  var num2 = parseInt(InputNum2, 10);

  if (operator == "+" && (num2)) {
    total = num1 + num2;
    alert(total);
  } else if (operator == "-" && (num2)) {
    total = num1 - num2;
    alert(total);
  }else if (operator == "*" && (num2)) {
    total = num1 * num2;
    alert(total);
  }else if (operator == "/" && (num2)) {
    total = num1 / num2;
    alert(total);
  }
} else if (CalcType == "a") {
  var option = prompt("Power(p) or SquareRoot(sq)");
  switch (option) {
    case "p":
      var InputNum = prompt("Input 1st number");
      var num1 = parseInt(InputNum, 10);
      var InputNum2 = prompt("Input 2nd number");
      var num2 = parseInt(InputNum2, 10);
      total = Math.pow(num1, num2);
      alert(total);
      break;
    case "sq":
      var InputNum = prompt("Input 1st number");
      var num1 = parseInt(InputNum, 10);
      total = Math.sqrt(num1);
      alert(total);
      break;
  }
}
