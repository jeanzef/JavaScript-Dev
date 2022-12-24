// 1 opção (Array de Objetos)
let faixa = [
    {tooltip: 'ate R$700', minimo: 0, maximo: 700 },
    {tooltip: 'de R$700 a R$1000 min', minimo: 700, maximo:1000 },
    {tooltip: 'R$ 1000 ou mais', minimo:1000, maximo:10000 }
];
console.log(faixa);

// 2 opção (Factory Fuction)
function criandoFaixa(tooltip, minimo, maximo){
        return {
            tooltip,
            minimo,
            maximo
        }
}

let faixa2 = [
    criandoFaixa('a', 1, 100),
    criandoFaixa('b', 100, 1000),
    criandoFaixa('c', 1000, 10000)
];
console.log(faixa2);

// 3 opção (Constructor Function)

function FaixaPreco(tooltip, minimo, maximo){
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo = maximo
}

let faixa3 = [
    new FaixaPreco ('d', 10, 20),
    new FaixaPreco ('e', 100, 200),
    new FaixaPreco ('f', 1000, 2000)
];
console.log(faixa3);