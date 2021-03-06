const arr = [1, 2, 3, 4, 5];
console.log(arr)

//3.1
const arr1 = arr.map(item => item + 10);
console.log(arr1)

//3.2
const usuario = {nome:'Diego', idade: 23};

const mostraIdade = usuario => usuario.idade;
console.log(mostraIdade(usuario))

//3.3
const nome = "Diego";
const idade = 23;

const mostraUsuario = (nome = 'nomePadrao', idade = 18) => ({nome, idade,})
console.log(mostraUsuario(nome, idade))

//3.4
const promise = () => new Promise((resolve, reject) => resolve());
