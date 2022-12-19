exibirNumerosPrimos (15);
function exibirNumerosPrimos (limite){
    for(let numero = 2; numero <= limite; numero++){
        // para aqui e vai para outra funcão, depois volta e faz o if.
        if (numeroPrimo(numero)) console.log(numero);
    }
}
function numeroPrimo(numero){
    for(let divisor = 2; divisor < numero; divisor++){
        if(numero % divisor === 0){
            return false;
        }
    }
    return true;
} // feito aqui volte para fazer o if.