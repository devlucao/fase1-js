/*
Exercício 1 — Condicional simples
Crie uma função que receba uma idade e retorne:
"menor de idade" ou "maior de idade"
*/

const isAdult = (age) => {
    const valid = age > 18 ? "maior" : "menor";
    return valid;
}

console.log(isAdult(16));

/* Exercício 2 — Early return
Crie uma função que receba um usuário e:
retorne "usuário inválido" se não existir
retorne "usuário inativo" se active === false
retorne "acesso liberado" caso contrário */

const checkUser = (user) => {
    if(!user) return "usuário inválido";
    if(!user.active) return "usuário inativo";
    return "acesso liberado!";
}

console.log(checkUser({ name: "Ana", active: true }))

/* Exercício 3 — Ternário
Dado um número, retorne "par" ou "ímpar" usando ternário. */

const number = 11;
const evenOrOdd = number % 2 === 0 ? "par" : "ímpar";
console.log(evenOrOdd)

/*Exercício 4 — Guard clauses
Crie uma função que receba um pedido e:
retorne "pedido inválido" se não existir
retorne "pedido vazio" se não tiver itens
caso contrário, retorne "processando pedido" */

const checkOrder = (order) => {
    if(!order) return "Pedido inválido.";
    if(!order.items || order.items.length === 0) return "Pedido vazio.";
    return "Processando pedido."
}

console.log(checkOrder({ id:1, items: ["X-Burger, Fritas, Refri"] }))
console.log(checkOrder({ id:1, items: [] }))
console.log(checkOrder())

/* Exercício 5 — Integração com HOF
Dado um array de usuários, gere um novo array contendo:
apenas usuários ativos
com idade maior ou igual a 18 */

const users = [
    { name: "Lucas", active: true, age: 34 }, 
    { name: "Daiane", active: false, age: 31 }, 
    { name: "Bento", active: false, age: 7 }, 
    { name: "Antonella", active: true, age: 6 }
];

const activeUsersAdult = users.filter((user) => user.active === true && user.age >= 18);

console.log(activeUsersAdult);

/* Exercício 6 — Regra de negócio

Crie uma função que receba:
- um saldo inicial
- um valor
- um tipo ("entrada" ou "saida")
E retorne o novo saldo. */

const newBalance = (balance, ammount, type) => {
    if(!balance) return "É necessário informar o valor do saldo inicial.";
    if(!ammount) return "É necessário informar um valor para o cálculo.";
    if(!type) return "Transação inexistente";
    if(type !== "entrada" && type !== "saida") return "Transação inválida";

    const calc = type === "entrada" ? balance + ammount : balance - ammount; 
    return calc;
}

console.log(newBalance(0, 20, "entrada"));
console.log(newBalance(100, 30, "saida"));
console.log(newBalance(110, 30, "saidas"));