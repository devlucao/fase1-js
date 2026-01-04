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

const sumScores = scores.reduce((acc, score) => acc + score, 0);

console.log(sumScores);

// como ficaria o exercício 8 usando o return?

/* Exercício 9 — reduce (objeto acumulador)
Considere o array abaixo:
Gere um objeto contendo o total vendido por produto.
*/
const sales = [
  { product: "Notebook", value: 3000 },
  { product: "Mouse", value: 100 },
  { product: "Notebook", value: 3000 },
  { product: "Mouse", value: 100 }
  ]; 

  const totalSales = sales.reduce((acc, productValue) => acc + productValue.value, 0);
  const obj = { total: totalSales };

  console.log(obj);

/*
Exercício 10 — sort
Considere o array abaixo:
Gere um novo array ordenado em ordem crescente sem modificar o array original.
*/
const ages = [33, 21, 45, 18, 29];

const orderedAges = ages.sort();

console.log(orderedAges);

/*Exercício 11 — slice
Considere o array abaixo:
Gere um novo array contendo apenas os três primeiros elementos. */
const items = ["a", "b", "c", "d", "e"];

const slicedItems = items.slice(0, 3);

console.log(slicedItems);

/* Exercício 12 — concat
Considere os arrays abaixo:
Gere um novo array contendo todos os membros dos dois times.*/

const teamA = ["Lucas", "Ana"];
const teamB = ["Pedro", "Marina"];

const teamsConcat = teamA.concat(...teamB);

console.log(teamsConcat);

/* Exercício 13 — flat
Considere o array abaixo:
Gere um novo array contendo todos os números em um único nível. */
const matrix = [[1, 2], [3, 4], [5, 6]];

const arr = matrix.flat(1)

console.log(arr);

/* Exercício 14 — flatMap
Considere o array abaixo:
Gere um array contendo todas as habilidades. */

const usrs = [
  { name: "Lucas", skills: ["JS", "Node"] },
  { name: "Ana", skills: ["HTML", "CSS"] },
  { name: "Pedro", skills: ["JS", "React"] }
];

const allSkills = usrs.flatMap(usrs => usrs.skills)

console.log(allSkills)

// Então o flatmap recebe como parâmetro uma callback function onde tem como argumento o nome do array a ser utilizado e depois da "arrow" o dado do objeto a ser inserido no novo array, é isso?

