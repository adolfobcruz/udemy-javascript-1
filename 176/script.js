function soma(a, b) {
  return a + b;
}

// calcula os dois parâmetros
console.log(soma(7, 7));

// desconsidera os parâmetros que estão sobrando
console.log(soma(7, 7, 9, 15));

// adiciona 'undefined' para a soma, e o resultado é um NaN (Not a Number)
function soma(a, b) {
  b = b === undefined ? 0 : b;

  return a + b;
}

console.log(soma(7));
