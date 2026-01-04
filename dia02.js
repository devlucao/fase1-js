/* Exercício 1 — Função simples
Crie uma função que receba um nome e retorne uma mensagem. */
const greet = (name) => {
  const message = `Olá, ${name}!`
  return message;
}

console.log(greet("Lucas"));

/* Exercício 2 — Função com lógica
Crie uma função que receba uma idade e retorne se a pessoa é maior de idade. */
const verifyAge = (age) => {
  if (age >= 18) {
    return `A pessoa é maior de idade.`;
  } else {
    return `A pessoa é menor de idade.`
  }
}

console.log(verifyAge(15));
console.log(verifyAge(18));
console.log(verifyAge(30));

/* Exercício 3 — Função que chama outra
Crie:
uma função que soma dois números
outra que usa essa soma e imprime o resultado */

const sum = (a, b) => a + b;
const result = (a, b) => {
  return `O resultado da soma é ${sum(a, b)}`;
}

console.log(result(3, 3));