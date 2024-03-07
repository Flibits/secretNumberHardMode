const ganhar = new Audio('/songs/winner.mp3')
const efeito = new Audio('/songs/snd_power.wav')

function verificaSeOChutePossuiUmValorValido() {
    const numero = +chute

    if (chuteForInvalido(numero)) {
        efeito.play()
        elementoChute.innerHTML += '<div>Numbers, not words! (or try to improve your voice a little)</div>'
        return
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        efeito.play()
        elementoChute.innerHTML += `<div>The secret number needs to be between ${menorValor} and ${maiorValor}</div>`
        return
    }

    if (numero === numeroSecreto) {
        ganhar.play()
        document.body.innerHTML = `
        <img class="guizinha" src="/img/guizinha.png" alt="Guinaifen - Honkai: Star Rail">
        <h2>You got it!</h2>
        <h3>The secret number was ${numeroSecreto}!<h3>
        <button id="jogar-novamente" class="btn-jogar">Play again</button>`

    } else if (numero > numeroSecreto) {
        efeito.play()
        elementoChute.innerHTML += `
        <div>The secret number is smaller <i class="fa-solid fa-angle-down"></i></div>`
    } else {
        efeito.play()
        elementoChute.innerHTML += `
        <div>The secret number is bigger <i class="fa-solid fa-angle-up"></i></div>`
    }
}

function chuteForInvalido(numero) {
    return Number, isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})