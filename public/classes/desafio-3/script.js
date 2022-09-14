// Crie uma aplicação para efetuar o cálculo do índice de massa corporal

// 1) Ao executar o script a aplicação deve solicitar a entrada do nome da pessoa.
var userName    = prompt('Por favor, digite seu nome:');

// 2) Na sequência a aplicação deve solicitar que seja informada a altura da pessoa em centímetros.
var userHeight  = parseFloat(prompt('Agora digite sua altura em centímetros:'));

// 3) Na sequência a aplicação deve solicitar que seja informado o peso da pessoa.
var userWeight  = parseFloat(prompt('E por último, digite seu peso:'));

// 4) Após as entradas de dados, atente-se a conversão das informações para dados do tipo float.

// 5) Converta a altura recebida em centímetros para metros. (basta dividir a altura por 100).
userHeight      = userHeight / 100;

// 6) Internamente a aplicação deve executar o cálculo do índice de massa corporal através
// da expressão: M = peso (quilos) ÷ altura2
userBodyMass    = userWeight / (userHeight * 2);
userBodyMass    = userBodyMass.toFixed(2);

var userBodyMassDescriptionZone = '';

// 7) Após identificar o índice de massa corporal o sistema deverá classificar em faixas descritivas
// utilizando os critérios abaixo:

// a) Se M estiver abaixo de 16 : Baixo peso - muito grave
if (userBodyMass < 16) {
  userBodyMassDescriptionZone = 'Baixo peso - Muito grave';

// b) Se M estiver entre 16 e 16,99: Baixo peso - grave
} else if (userBodyMass >= 16 && userBodyMass <= 16.99) {
  userBodyMassDescriptionZone = 'Baixo peso - Grave';

// c) Se M estiver entre 17 e 18,49: Baixo peso
} else if (userBodyMass >= 17 && userBodyMass <= 18.49) {
  userBodyMassDescriptionZone = 'Baixo peso';

// d) Se M estiver entre 18,50 e 24,99: Peso normal
} else if (userBodyMass >= 18.50 && userBodyMass <= 24.99) {
  userBodyMassDescriptionZone = 'Peso normal';

// e) Se M estiver entre 25 e 29,99: Sobrepeso
} else if (userBodyMass >= 25 && userBodyMass <= 29.99) {
  userBodyMassDescriptionZone = 'Sobrepeso';

// f) Se M estiver entre 30 e 34,99: Obesidade grau I
} else if (userBodyMass >= 30 && userBodyMass <= 34.99) {
  userBodyMassDescriptionZone = 'Obesidade Grau I';

// g) Se M estiver entre 35 e 39,99: Obesidade grau II
} else if (userBodyMass >= 35 && userBodyMass <= 34.99) {
  userBodyMassDescriptionZone = 'Obesidade Grau II';

// h) Se M for maior que 40: Obesidade grau III
} else if (userBodyMass > 40) {
  userBodyMassDescriptionZone = 'Obesidade Grau III';
}

// 8) Ao término o sistema deve fornecer a seguinte saída para o usuário:
// “<Nome> possui índice de massa corporal igual a <m>, sendo classificado como:
// <classificacao>.”
document.write(userName + ' possui índice de massa corporal igual a ' + userBodyMass + ', sendo classificado como: ' + userBodyMassDescriptionZone + '.');


// *As informações em vermelho são variáveis e devem ser substituídas pelos seus respectivos
// valores calculadas dentro da aplicação.