// E (&&)
// só retorna Verdadeiro se todas Expressões forem verdadeiras
// com uma Expressão falsa, tudo é Falso

// true && true && false = false
// if (2 == 2 && 3 >= 4 && 'a' == 'b') {
//   document.write('Verdadeiro!');
// } else {
//   document.write('Falso!');
// }


//



// OU (||)
// se somente uma Expressão for verdadeira, retorna Verdadeiro

// true || false || false = true
// if (2 == 2 || 3 >= 4 || 'a' == 'b') {
//   document.write('Verdadeiro!');
// } else {
//   document.write('Falso!');
// }



//



// NEGAÇÃO (!)
// inverte o valor da Expressão
// se for true se torna false
// se for false se torna true

// false se torna true = true
// if (!(2 == 3)) {
//   document.write('Verdadeiro!');
// } else {
//   document.write('Falso!');
// }



//




var notaAluno     = prompt('Digite a nota do aluno: ');
var faltasAluno   = prompt('Digite a quantidade de faltas: ');

var mediaGeral    = 7;
var faltasMaximas = 15;

// Operadores Lógicos
// if (notaAluno >= mediaGeral && faltasAluno <= faltasMaximas) {
//   document.write('Aprovado!');
// } else {
//   document.write('Reprovado!');
// }

// Operador Ternário
var resultado = (notaAluno >= mediaGeral && faltasAluno <= faltasMaximas) ? 'Aprovado!' : 'Reprovado!';
document.write(resultado);