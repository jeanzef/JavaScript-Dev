exibirTipo(9);
function exibirTipo(limite){
    for (i = 0; i <= limite; i++){
        if (i % 2 !== 0)
        console.log(i,'IMPAR');
    
        else
        console.log(i,'PAR');
    }
}