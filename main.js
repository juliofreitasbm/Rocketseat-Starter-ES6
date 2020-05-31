const usuario = {
	nome: 'Julio',
	idade: 23,
	endereco: {
		cidade: 'Goiânia',
		estado: 'SC',
	},
};

function mostraNome({nome, idade}) {
	console.log(nome, idade);
}

mostraNome(usuario);