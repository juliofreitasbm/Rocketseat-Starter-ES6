const usuarios = [
	{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
	{ nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
	{ nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

/* Forma Padrão
const idades = usuarios.map( function(item) {
	return item.idade;
})
*/

//Arrow Function
const idades = usuarios.map(item => item.idade);
console.log(idades);

/* Forma Padrão
const rockets = usuarios.filter(function(item) {
		return item.empresa == 'Rocketseat' && item.idade > 18;
});
*/

//Arrow Function
const rockets = usuarios.filter(item => item.empresa == 'Rocketseat' && item.idade > 18);
console.log(rockets);

/* Forma padrão
const googlers = usuarios.find(function(item) {
	return item.empresa == 'Google'
});
*/

const googlers = usuarios.find(item => item.empresa == 'Google');
console.log(googlers);

/* Sem spread
const results = usuarios.map(function(item) {
	item.idade *= 2;
	return item;
}).filter(item => item.idade <= 50);
*/

//Com arrow function e spread
const calculo = usuarios
	.map(usuario => ({...usuario, idade: usuario.idade * 2}))
	.filter(usuario => usuario.idade <= 50);

console.log(calculo)
