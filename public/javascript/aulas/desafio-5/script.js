// Após criar os elementos de interação com o usuário acima,
// crie um Array de nome objetos contendo os seguintes valores:
var objetos = Array('Cadeira', 'Impressora', 'Garfo');

// A) Ao clicar no botão "Adicionar" disparar função que irá:
function adicionar() {
  // Recuperar o valor contido no campo de texto.
  var inputTextValue = document.getElementById('input_text').value;

  // Verificar se o valor está vazio ou preenchido.
  if (inputTextValue != '') {
    // Se preenchido:

    // Verificar se o valor informado já existe dentro do Array objetos.
    var verificaArray = objetos.indexOf(inputTextValue);

    if (verificaArray != -1) {
      // Se existir, exibir alert com a mensagem "Objeto já foi adicionado".
      alert('Atenção: objeto já adicionado!');
    } else if (verificaArray == -1) {
      // Se não existir:

      // Incluir o valor preenchido no campo dentro do Array.
      objetos.push(inputTextValue);
      console.log(objetos);

      // Limpar o valor contido no campo de entrada de texto.
      document.getElementById('input_text').value = '';
    }
  } else if (inputTextValue == '') {
    // Se vazio, exibir alert com a mensagem "Informe um valor válido".
    alert('Por favor, informe um valor válido.');
  }
}

function ordenar() {
  // Ordenar de forma alfabética os valores do Array de objetos.
  objetos.sort();
  console.log(objetos);
}