const numeros = [35,23,34,47];
console.log(numeros.indexOf(23));

//outro exemplo

const numeros2 = [10,26,35,42];
console.log(numeros2.lastIndexOf(35));

//patra verificar se realmente existe os numeros tem alguns tipos 

// o !== -1
//ex 
const numeros3 = [15,48,51,79];
console.log(numeros3.lastIndexOf(51) !== -1);


// hoje em dia é mais usado o includes para verificar se é verdade ou falso
const numeros4 = [1,2,3,4];
console.log(numeros4.includes(2));