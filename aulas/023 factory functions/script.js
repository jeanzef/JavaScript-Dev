function criarCelular(marcaCelular,tamanhoTela,capacidadeBateria){
    return{
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar(){
            console.log("Fazendo Ligação...")
        }
    }
}
const celular = criarCelular('Asus',5.5,5000);
console.log(celular);