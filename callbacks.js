// setTimeout(() => console.log('Bom dia'), 2000);

// setTimeout(function () {
//   console.log('Boa noite');
// }, 4000);

function soma(a, b) {
  return a + b;
}

function multiplica(a, b) {
  return a * b;
}

function calcula(fnOperacao, valorA, valorB) {
  return fnOperacao(valorA, valorB);
}

console.log(calcula(soma, 5, 5));
console.log(calcula(multiplica, 5, 5));

const userId = '4545656';

const avisaUsuario = (userId) =>
  console.log(`Sessão de ${userId} está inativa.`);

setTimeout(avisaUsuario, 2000, userId);

setTimeout(
  (userId) => console.log(`Sessão de ${userId} está inativa.`),
  4000,
  userId,
);
