function exibirArtigo(id, callbackSucesso, callbackErro) {
  // Lógica: recuperar o id via req HTTP
  if (true) {
    callbackSucesso('Funções de Callback em JavaScript', 'Funções de Callback são muito utilizadas.');
  } else {
    callbackErro('Erro ao recuperar os dados.');
  }
}

var callbackSucesso = function(titulo, descricao) {
  document.write('<h1>' + titulo + '</h1>');
  document.write('<hr>');
  document.write('<p>' + descricao + '</p>');
}

var callbackErro = function(erro) {
  document.write('<p><b>Erro: </b>' + erro + '</p>');
}

exibirArtigo(1, callbackSucesso, callbackErro);
