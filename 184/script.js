function calculate(num1, num2, op) {
  var result = 0;

  if (op === 'soma') {
    result = num1 + num2;
  } else if (op === 'subtracao') {
    result = num1 - num2;
  }

  return result;
}

var number1   = parseInt(prompt('Digite um número: '));
var operation = prompt('Escolha uma operação (soma / subtracao): ');
var number2   = parseInt(prompt('Digite outro número: '));

document.write('O resultado é: ' + calculate(number1, number2, operation));
