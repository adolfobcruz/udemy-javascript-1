// o JavaScript possui 3 escopos de variáveis: GLOBAL, FUNÇÃO e de BLOCO

// escopo de FUNÇÃO e BLOCO visualizam variáveis de escopo GLOBAL
// variáveis declaradas dentro de escopo de BLOCO sofrem elevação
// variáveis declaradas dentro de escopo de FUNÇÃO não sofrem elevação

var serie1 = 'Friends';

// escopo: BLOCO
if (true) {
  var serie2 = 'Breaking Bad';

  document.write('BLOCO: ');
  document.write(serie1);
  document.write('<hr>');
}

// escopo: GLOBAL
document.write('GLOBAL: ');
document.write(serie2);
document.write('<hr>');

// escopo: FUNÇÃO
function x() {
  var serie3 = 'Dark';

  document.write('FUNÇÃO: ');
  document.write(serie1 + ' / ');
  document.write(serie2);
  document.write('<hr>');
}

// escopo: GLOBAL
document.write('GLOBAL: ');
document.write(serie2);
document.write('<hr>');

x();
