/* 
Exercício 1 — Objetos
Crie um objeto product com:
name
price
available
Imprima o nome e o preço.
*/

const product = {
    name: "Notebook",
    price: 3000,
    available: true
}

console.log(product.name, product.price);

/* Exercício 2 — Destructuring de objeto
Dado o objeto:
Extraia:
name
active
*/
const user = { name: "Ana", age: 28, active: true };
const { name, active } = user;
console.log(name, active);

/* Exercício 3 — Destructuring em parâmetros
Crie uma função que receba um usuário e retorne:
"ativo" ou "inativo"
Usando destructuring direto no parâmetro.
*/

const checkUser = ({ active }) => active ? "ativo" : "inativo";
console.log(checkUser(user)); // usei objeto do exercício 2

/* Exercício 4 — Spread em objetos
Dado:
Crie um novo objeto adicionando:
role: "ADMIN"
Sem alterar o original.
*/
const usr = { name: "Lucas", age: 34 };
const updatedUsr = { ...usr, role: "ADMIN" };

console.log(updatedUsr);

/*
Exercício 5 — Spread em arrays
Dado:
Crie um novo array com todas as tecnologias.
*/
const frontend = ["HTML", "CSS"];
const backend = ["Node", "SQL"];

const allStacks = [...frontend, ...backend];
console.log(allStacks);

/*
Exercício 6 — Imutabilidade
Crie uma função que receba um produto e um novo preço e:
retorne um novo produto
com o preço atualizado
sem modificar o original
*/

const originalProduct = { name: "Mouse", price: 30 };

const newProduct = (product, price) => {
    return {...product, price };
}

console.log(newProduct(originalProduct, 50));

/*
Exercício 7 — Desafio (importante)
Dado um array de usuários:
Gere um novo array onde:
todos os usuários estejam active: true
sem mutar o array original
*/
const users = [
  { name: "Lucas", active: true },
  { name: "Daiane", active: true },
  { name: "Ana", active: false }
];

const activeUsers = users.map((user) => ({...user, active: true}));

console.log(activeUsers);
