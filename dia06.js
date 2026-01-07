/*
Exercício 1 — for...of
Dado um array de números, percorra e imprima apenas os números maiores que 10.
*/

const numbers = [1, 39, 4, 5, 24, 546432, 33, 12, 2, 5];

for (const number of numbers) {
    if (number > 10) {
        console.log(number);
    }
}

/*
Exercício 2 — for...in
Dado um objeto user, percorra e imprima:
cada chave
seu respectivo valor
*/

const user = {
    name: "Lucas",
    age: 34,
    active: true
}

for (const key in user) {
    console.log(`${key}: ${user[key]}`);
}

/*
Exercício 3 — forEach
Dado um array de nomes, imprima uma mensagem de boas-vindas para cada um.
*/

const names = ["Lucas", "Daiane", "Bento", "Antonella"];
names.forEach((name) => console.log(`Olá, ${name}`));

/*
Exercício 4 — Loop → HOF
Dado um loop que filtra usuários ativos, refatore usando HOF.
*/
const users = [
    {
        name: "Lucas",
        age: 34,
        active: true
    },
    {
        name: "Daiane",
        age: 31,
        active: false
    },
    {
        name: "Antonella",
        age: 6,
        active: true
    },
    {
        name: "Bento",
        age: 7,
        active: false
    }
]

const result = [];
for (let i = 0; i < users.length; i++) {
    if (users[i].active) {
        result.push(users[i].name);
    }
}

const refResult = users
    .filter((user) => user.active === true)
    .map((userName) => userName.name);

console.log(refResult);

/*
Exercício 5 — HOF → Loop
Dado um código com map, reescreva usando for...of.
*/
const prices = [100, 250, 80, 40];

const discountedPrices = prices.map(price => {
  return price * 0.9;
});
// console.log(discountedPrices);
// [90, 225, 72, 36]

const newArr = [];
for(const price of prices) {
    newArr.push(price * 0.9);
}
console.log(newArr);

/*
Exercício 6 — Decisão consciente
Dado um array de pedidos:
encontre o primeiro pedido "PENDENTE"
pare a execução assim que encontrar
*/
const orders = [
  { id: 1, status: "FINALIZADO" },
  { id: 2, status: "FINALIZADO" },
  { id: 3, status: "PENDENTE" },
  { id: 4, status: "PENDENTE" }
];

for(const order of orders) {
    if(order.status === "PENDENTE") {
        console.log(order);
        break
    }
}

/*
Exercício 7 — Desafio final
Dado um array de números:
percorra
some apenas os números pares
interrompa o loop se a soma ultrapassar 50
*/

let sum = 0;
for(const number of numbers) {
    if(number % 2 === 0) {
        sum = sum + number;
        if(sum > 50) break;
        console.log(sum);
    }
}