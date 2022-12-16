// divisível por 3 => Fizz
// divisível por 5 => Buzz
// divisível por 3 ou 5 => FizzBuzz
// Não divisível por 3 ou 5 => entrada ,sera ele msm
// Não é um número => 'Não é um número'

const resultado = fizzBuzz(15);
console.log(resultado);

function fizzBuzz(entrada){
    if (typeof entrada !== 'number')
        return 'Não é um número';
    if ((entrada % 3 === 0) && (entrada % 5 === 0))
        return ('FizzBuzz');
    if ( entrada % 3 === 0)
        return ('Fizz');
    if ( entrada % 5 === 0)
        return ('Buzz')
    return entrada;
}