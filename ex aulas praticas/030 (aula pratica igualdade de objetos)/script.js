function Endereco (rua, cidade, cep){
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
}

const endereco1 = new Endereco ('a', 'b', 'c');
const endereco2 = new Endereco ('a', 'b', 'c');

function saoIgauis (endereco1, endereco2){
    return (endereco1.rua === endereco2.rua &&
            endereco1.cidade === endereco2.cidade &&
            endereco1.cep === endereco2.cep)
}
console.log(saoIgauis (endereco1, endereco2));

function temEnderecoMemoriaIgauis( endereco1, endereco2){
    return (endereco1 === endereco2);
}
console.log(temEnderecoMemoriaIgauis (endereco1, endereco2));