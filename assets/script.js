function calc(){
  var a = parseInt(document.querySelector("#value1").value);
  var b = parseInt(document.querySelector("#value2").value);
  var op = document.querySelector("#operator").value;
  var calculate;

  if (op == "plus") {
    calculate = a + b;
  } else if (op == "min") {
    calculate = a - b;
  }
  else if (op == "delen") {
    calculate = a / b;
  }
  else if (op == "maal") {
    calculate = a * b;
  }
}

document.querySelector("#result").innerHTML = calculate;

console.log(calculate)