"use strict";

var usuario = {
  nome: 'Julio',
  idade: 23,
  endereco: {
    cidade: 'Goiânia',
    estado: 'SC'
  }
};

function mostraNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log(nome, idade);
}

mostraNome(usuario);
