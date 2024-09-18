function displayValue(val){
     document.getElementById("display").value = document.getElementById("display").value + val;
}

function clearDisplay(){
    document.getElementById("display").value = "";
}

function calculate(){
    var userInput = document.getElementById("display").value;
    var result  = eval(userInput);
    document.getElementById("display").value = result;
}

/*

document.getElementById('displayValue').addEventListener('click'), function() {
  const input = document.getElementById('input').value;
  let result;
  const parts = input.split(' ');

  if(parts.length !== 3) {
    result = 'Please enter a valid expression ';
    } else {
    const num1 = parseFloat(parts[0]);
    const operator = parts[1];
    const num2 = parseFloat(parts[2]);
    
    }
  if(operator === '+') {
    result = num1 + num2;
    } else if (operator === '-') {
    result = num1 - num2;
    } else if (operator === '*') {
    result = num1 * num2;
    } else if (operator === '/') {
    if (num2 === 0) {
    result = 'Cannot divide by zero.';
    } else {
    result = num1 / num2;
    }
    }
}
*/