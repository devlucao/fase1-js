/*
📦 CONTEXTO DO DESAFIO
Você recebeu uma lista de usuários de um sistema.
Cada usuário possui: nome, idade, status de atividade, lista de pedidos;
🔹 Dados iniciais (use exatamente estes)
*/

const users = [
  {
    name: "Lucas",
    age: 34,
    active: true,
    orders: [
      { id: 1, value: 120, status: "FINALIZADO" },
      { id: 2, value: 80, status: "PENDENTE" }
    ]
  },
  {
    name: "Ana",
    age: 28,
    active: false,
    orders: [
      { id: 3, value: 200, status: "FINALIZADO" }
    ]
  },
  {
    name: "Pedro",
    age: 17,
    active: true,
    orders: []
  }
];

/*
Desafio 1 — Filtragem básica
Gere um novo array contendo apenas usuários ativos.
*/

const activeUsers = users
    .filter((user) => user.active);

console.log(activeUsers);

/*
Desafio 2 — Regra de negócio
A partir do resultado anterior, gere um novo array contendo apenas usuários ativos e maiores de idade.
*/

const adultUsers = activeUsers
    .filter((user) => user.age >= 18);

console.log(adultUsers);

/*
Desafio 3 — Transformação de dados
Gere um novo array contendo apenas os nomes dos usuários válidos do desafio 2.
*/

const activeAdultUsersName = adultUsers.map((user) => user.name);
// console.log(activeAdultUsersName); 

/*
Desafio 4 — Cálculo com reduce
Calcule o valor total de pedidos FINALIZADOS de todos os usuários ativos.
*/

// console.log(activeUsers);

const allOrders = activeUsers.map((user) => user.orders).flat();
const finishedOrders = allOrders.filter((order) => order.status === "FINALIZADO");
const totalValueOrders = finishedOrders.reduce((acc, order) => acc + order.value, 0);

// console.log(totalValueOrders)

/*
Desafio 5 — Decisão consciente (loop obrigatório)
Verifique se existe algum usuário ativo que possua pedido PENDENTE.
Assim que encontrar, interrompa a execução.
Retorne true ou false.
*/

let hasPendingOrder = false;

for(const user of activeUsers) {
    for(const order of user.orders) {
        if (order.status === "PENDENTE") {
            hasPendingOrder = true;
            break;
        }
        if(hasPendingOrder) break;
    }
}

// console.log(hasPendingOrder)

/*
Desafio 6 — Imutabilidade (importante)
Gere um novo array de usuários onde:
todos os usuários estejam active: true
sem mutar o array original
*/
const allActiveUsers = users.map((user) => ({...user, active: true}));
// console.log(allActiveUsers);

/* Desafio 7 — Função utilitária
Crie uma função getUserSummary(user) que retorne um objeto com:
name
isAdult
totalOrders
totalSpent (somente pedidos FINALIZADOS)
Use:
destructuring
early return se o usuário for inválido */

const getUserSummary = (user) => {
    if(!user) return "Usuário inválido!";
    let userSpent = 0;
    user.orders.map((order) => {
        order.status === "FINALIZADO" ? userSpent += order.value : userSpent;
    })
    const userObj = { 
        name: user.name, 
        isAdult: user.age >= 18 ? true : false, 
        totalOrders: user.orders.length, 
        totalSpent: userSpent
    };
    return userObj;
}

console.log(getUserSummary(users[0]))