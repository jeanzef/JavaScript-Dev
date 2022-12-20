const celular = {
    marcaCelular : 'ASUS',
    tamanhoTela : {
        vertical : 155,
        horizontal : 75
    },
    ligar: function(){
        console.log("Fazendo Ligação...")
    }
}
// aqui temos a primeira maneira para clonar
//essa usa o object.assingn
const novoObjeto = Object.assign({
    bateria:5000
}, celular)
console.log(novoObjeto)
// aqui temos a segunda maneira para colnar
//essa usa o {...}
const Object2 = {...celular};
console.log(Object2);