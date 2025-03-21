function gerarOTP() {
    const numeros = "0123456789"; 
    let codigoOTP = gerarCodigoAleatorio(numeros, 6); 
    document.querySelector('#campoTexto').value = codigoOTP;
    iniciarContagemRegressiva(10); // Inicia a contagem de 10 minutos
}

function gerarCodigoAleatorio(alfabeto, comprimento) {
    let codigo = '';
    for (let i = 0; i < comprimento; i++) {
        codigo += alfabeto[Math.floor(Math.random() * alfabeto.length)];
    }
    return codigo;
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
