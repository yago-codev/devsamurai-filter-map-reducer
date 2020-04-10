// TRABALHANDO COM O REDUCE NO FORMATO DE AGREGAÇAO
var valores = [1.5, 2, 4, 10];
const valoresSomados = valores.reduce((total, valor, indice) => {
  console.log(`
    Total acumulado: ${total}, 
    valor que está sendo acumulado: ${valor},
    índice do valor que está sendo acumulado: ${indice}
  `);

  return total + valor;
}, 0);
console.log(valoresSomados);

var notasProvas = [1.5, 2, 4, 10];
notasProvas.reduce((total, nota) => total + nota) / notasProvas.length;
const calcMedia = console.log(notasProvas);

//
//
// TRABALHANDO COM O REDUCE NO FORMATO MAP
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosDobrados = numeros.reduce(
  (total, numero) => total.concat(numero * 2),
  []
); // iniciando/setando o reduce como um array para podermos dar push em cada índice percorrido
console.log(`numeros dobrados: ${numerosDobrados}`);

//
//
// TRABALHANDO COM O REDUCE NO FORMATO FILTER
var numeros = [10, 28, 1, 15];
const calc = numeros.reduce(
  (total, numero) => (numero > 10 ? total.concat(numero) : total),
  []
);
console.log(`números maiores que 10: ${calc}`);
