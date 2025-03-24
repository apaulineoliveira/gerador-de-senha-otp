function gerarOTP() {
    const numeros = "0123456789"; 
    const codigoOTP = gerarCodigoAleatorio(numeros, 6); 
    document.querySelector('#campoTexto').value = codigoOTP;
    iniciarContagemRegressiva(10); 
}


function gerarSequenciaAleatoria(conjuntoCaracteres, tamanho) {
    let sequencia = '';
    for (let i = 0; i < tamanho; i++) {
        sequencia += conjuntoCaracteres[Math.floor(Math.random() * conjuntoCaracteres.length)];
    }
    return sequencia;
}



function iniciarContagemRegressiva(minutos) {
    const tempoTotal = minutos * 60;
    let tempoRestante = tempoTotal; 
    const elementoContador = document.getElementById('contador'); 

    const intervalo = setInterval(() => {
        const { minutos, segundos } = calcularTempoRestante(tempoRestante);
        elementoContador.innerHTML = `${minutos}:${segundos}`;
        tempoRestante--;

        if (tempoRestante < 0) {
            clearInterval(intervalo);
            elementoContador.innerHTML = "00:00";
        }
    }, 1000);
}

function calcularTempoRestante(segundos) {
    const minutos = Math.floor(segundos / 60);
    const segundosRestantes = segundos % 60;
    const segundosFormatados = segundosRestantes < 10 ? `0${segundosRestantes}` : segundosRestantes;
    return { minutos, segundos: segundosFormatados };
}

const recarregarPagina = () => window.location.reload();
setTimeout(recarregarPagina, 600000);
