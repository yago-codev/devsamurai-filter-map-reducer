const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosDobrados = numeros.map((numero) => numero * 2);
console.log(`números padrão: ${numeros}. números dobrados: ${numerosDobrados}`);

const fahrenheit = [0, 32, 45, 46, 47, 91, 93, 121];
const celcius = fahrenheit.map((fahrenheit) =>
  Math.round(((fahrenheit - 32) * 5) / 9)
);
console.log(celcius);

const convidados = [
  { nome: "felipe", vip: false },
  { nome: "danIEl", vip: true },
  { nome: "João", vip: true },
];
const convidadosNormalizado = convidados.map((convidado) => {
  return Object.assign(convidado, { nome: convidado.nome.toUpperCase() });
});
console.log(convidadosNormalizado);
