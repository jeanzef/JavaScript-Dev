verificarVelocidade(85);

function verificarVelocidade(velocidade){
    const velocidadeMaxima = 70;
    const kmPorPontos = 5;
    if ( velocidade <= velocidadeMaxima )
        console.log('ok');
    else{
        const pontos = Math.floor(((velocidade - velocidadeMaxima) / kmPorPontos));
        if (pontos >= 12)
        console.log('Carteira Suspensa');
        else
        console.log('pontos',pontos);
    }
}