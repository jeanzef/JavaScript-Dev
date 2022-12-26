const papelaria = [
    {id: 1, nome: 'lapis'},
    {id: 2, nome: 'caneta'},
    
];
const revenda = papelaria.find((revenda) => {
    return revenda.nome === 'lapis';
});
console.log(revenda);

// e da para diminuir mais ainda
// tirando o return as {} e subistituindo a function pelo Arrow Function e já envelopando tudo com o console.log para já mostrar na tela
console.log(papelaria.find(revenda => revenda.nome === 'caneta'));

// se acaso não tenha um parametro pode por somente ()
// porem testes falharam, uma possivel possibilidade de eu ter errado.