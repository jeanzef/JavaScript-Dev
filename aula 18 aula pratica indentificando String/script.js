const filme = {
    titulo : 'Hobbit',
    ano : 2018,
    diretor : 'roger',
    personagem : 'Frodo',
}
exibirPropriedades(filme);
function exibirPropriedades(obj){
    for (prop in obj)
        if (typeof obj[prop] === 'string')
            console.log (prop,obj[prop]);
}