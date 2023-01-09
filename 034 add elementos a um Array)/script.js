//adicionando elementos a um Array
const numeros = [1, 2, 3];

//no início
numeros.unshift(0);
console.log(numeros);

//mo meio
numeros.splice(1,0,'a');
console.log(numeros);

//no final
numeros.push(5);
console.log(numeros);