// metodo 1 DIVIDINDO
const primeiro = [1,2,3];
const segundo = [4,5,6];

const combinado = primeiro.concat(segundo);
console.log(combinado);

const cortando = combinado.slice(1,3);
console.log(cortando);


// ele divide pega a referencia contando apartir do 0 e vai até o ultimo indice -1
// se é para ir até o 4 ele vai até o 3
