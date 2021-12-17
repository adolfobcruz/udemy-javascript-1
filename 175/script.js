// void
// function calcularAreaTerreno(largura, comprimento) {
//   var area = largura * comprimento;

//   document.write(area);
// }

// return
function calcularAreaTerreno(largura, comprimento) {
  var area = largura * comprimento;

  return area;
}

let largura     = parseInt(prompt('Digite a largura do terreno em metros: '));
let comprimento = parseInt(prompt('Digite o comprimento do terreno em metros: '));

let area        = calcularAreaTerreno(largura, comprimento);

document.write('O terreno possui ' + area + ' metros quadrados.');
