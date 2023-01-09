const numeros = [1,2,3,4,5,6];

const combinado = numeros.join ('.');
console.log(combinado);

// outro exemplo se eu dar espaço a uma frase e quiser
// O split serve para separar palavra por palavra
const frase = 'Bem vindo ao curso';
const resultado = frase.split(' ');
console.log(resultado);

// depois uso o join para adicionar algo ex: '-'
// assim eu tiro o espaço entre as palavras
console.log(resultado.join('-'));