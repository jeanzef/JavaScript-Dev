const pessoa = {
    nome: 'jean',
    idade: 25,
};

for (let chave in pessoa){
    console.log(chave,pessoa['nome']);
}
