// START
console.log('start hier');

// GLOBALE VARIABELEN

// FUNCTIONS
function calc(){
  console.log('calc function called');

  // PRIVATE VARIABELEN
  var a = parseInt(document.querySelector("#value1").value);
  var b = parseInt(document.querySelector("#value2").value);
  var op = document.querySelector("#operator").value;
  var result;


  if (op == "plus") {
    result = a + b;
  } else if (op == "min") {
    result = a - b;
  }
  else if (op == "delen") {
    result = a / b;
  }
  else if (op == "maal") {
    result = a * b;
  }
console.log(result)
document.querySelector("#result").innerHTML = result;
}