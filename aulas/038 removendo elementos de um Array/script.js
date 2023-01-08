//removendo elementos de um array

const numeros = [1,2,3,4,5,6];
//inicio
const inicio = numeros.shift();
console.log(inicio);
console.log(numeros);

//meio
const meio = numeros.splice(2,1);
console.log(meio);
console.log(numeros);

//final
const final = numeros.pop();
console.log(final);
console.log(numeros);



