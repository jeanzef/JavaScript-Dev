const papelaria = [
    {id: 1, nome: 'lapis'},
    {id: 2, nome: 'caneta'},
];
const revenda = papelaria.find(function(revenda){
    return revenda.nome === 'lapis';
});
console.log(revenda);