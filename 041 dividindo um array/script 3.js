// metodo 3 DIVIDINDO
const primeiro = [1,2,3];
const segundo = [4,5,6];

const combinado = primeiro.concat(segundo);
console.log(combinado);

const cortando = combinado.slice();
console.log(cortando);

// aqui ele copia para outra variavel porem tem que lembrar que se mudar na variavél que é referencia os que são referenciados por ela tbm vão mudar

// por exemplo se  um deles tivesse um id e voce mudasse o conteudo que está nesse id ele mudaria de todos que se referenciam a ele