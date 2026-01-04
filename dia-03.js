/* Exercício 1 — forEach
Considere o array abaixo:
Percorra o array e imprima uma mensagem personalizada para cada nome. */

const names = ["Lucas", "Ana", "Pedro", "Marina"];

names.forEach((name) => {
  console.log(`Olá, ${name}`);
})

/* Exercício 2 — find
Considere o array abaixo:
Encontre o usuário cujo id seja igual a 2.*/

const users = [
  { id: 1, name: "Lucas" },
  { id: 2, name: "Ana" },
  { id: 3, name: "Pedro" }
];

const user = users.find(user => user.id === 2);
console.log(`O nome do usuário de id 2 é ${user.name}.`)

/*Exercício 3 — some
Considere o array abaixo:
Verifique se existe ao menos um número negativo.*/
const numbers = [3, 7, -2, 8, 10];

const hasNegative = numbers.some((number) => number < 0);

if(hasNegative) {
  console.log("Existe ao menos um número negativo.")
}

/* Exercício 4 — every
Considere o array abaixo:
Verifique se todos os valores são maiores que zero. */
const values = [2, 5, 7, 10];

const allPositive = values.every((value) => value > 0);

if (allPositive) {
  console.log("Todos os números são positivos.");
}

/*
Exercício 5 — includes
Considere o array abaixo:
Verifique se o usuário possui a permissão "ADMIN".
*/
const permissions = ["USER", "EDITOR", "ADMIN"];

const isAdmin = permissions.includes("ADMIN");

if(isAdmin) {
  console.log("O usuário é administrador.")
} 

/* Exercício 6 — map
Considere o array abaixo:
Gere um novo array aplicando um desconto de 10% em cada preço. */
const prices = [100, 250, 80, 40];

const discount = prices.map((price) => {
  return price - (price * 0.1)
})

console.log(discount);

/*
Exercício 7 — filter
Considere o array abaixo:
Gere um novo array apenas com os números pares.
*/
const nums = [1, 2, 3, 4, 5, 6, 7, 8];

const evenArray = nums.filter((num) => num % 2 === 0);

console.log(evenArray);


/*Exercício 8 — reduce
Considere o array abaixo:
Calcule a soma total dos valores.*/
const scores = [10, 8, 9, 7, 6];

