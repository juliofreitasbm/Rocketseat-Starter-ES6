const arr = [1, 2, 3, 4, 5, 6];

//5.1
const [ x, ...y ] = arr;

console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

function soma(...params) {
	/*
	return params.reduce(function(total, next) {
		return total + next;		
	});
	*/
	return params.reduce((total, next) => total + next);
}

console.log(soma(1, 2, 3, 4, 5, 6)); //21
console.log(soma(1, 2)); //3

//5.2
const usuario = {
	nome: 'Diego',
	idade: 23,
	endereco: {
	cidade: 'Rio do Sul',
	uf: 'SC',
	pais: 'Brasil',
	}
};

const usuario2 = {...usuario, nome: 'Garbiel'};
const usuario3 = {...usuario, endereco: {...usuario.endereco, cidade:'Lontras'}};

console.log(usuario2);
console.log(usuario3);