var numeros = [10, 18, 1, 15];
numerosFiltrados = numeros.filter((numero) => numero > 10); // retorna os numeros maiores que 10
console.log(numeros, numerosFiltrados);

const nome = "Teste";
console.log(nome[0]); // O JS trata strings como arrays
console.log(nome.charAt(0)); // retorna o primeiro caractere
const nomes = ["Bruno", "Zezinho", "Fulano", "Douglas"];

const nomesFiltrados = nomes.filter((nome) => nome.charAt(0) === "Z"); // retornando os nomes que começam com a letra "Z"
console.log(nomesFiltrados);

var numeros = [10, 18, 1, 15, 2, 12, 21, 33, 100];
const numerosPares = numeros.filter((numero) => numero % 2 === 0);
const numerosImpares = numeros.filter((numero) => numero % 2 !== 0);
console.log(
  `numeros pares: ${numerosPares}. numeros impares: ${numerosImpares}`
);

const filmes = [
  { titulo: "Titanic", duracao: 195, nota: 7.5 },
  { titulo: "The Avengers", duracao: 203, nota: 9.5 },
  { titulo: "Bean", duracao: 90, nota: 6.5 },
];
const notaDeCorte = 8;
const filmesBons = filmes.filter((filme) => filme.nota >= notaDeCorte);
const filmesRuins = filmes.filter((filme) => filme.nota < notaDeCorte);
console.table(filmesBons);
console.table(filmesRuins);

const convidados = [
  { nome: "Daniel", vip: true, idade: 21 },
  { nome: "Gabriel", vip: true, idade: 54 },
  { nome: "Felipe", vip: false, idade: 37 },
];
const convidadosVips = convidados.filter((convidado) => convidado.vip);
console.log(convidadosVips);
