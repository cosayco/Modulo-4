let intervalo

function iniciarTemporizador() {
    const segundos = parseInt(document.getElementById("segundos").value)
    const temporizador = document.getElementById("temporizador")

    if (!isNaN(segundos) && segundos > 0) {
        temporizador.textContent = segundos < 10 ? `0${segundos}` : segundos
        let remanente = segundos

        intervalo = setInterval(() => {
            if (remanente <= 0) {
                clearInterval(intervalo)
                finTemporizador(() => { temporizador.textContent = '00' });
            } else {
                remanente--
                temporizador.textContent = remanente < 10 ? `0${remanente}` : remanente
            }
        }, 1000)
    }
}

function detenerTemporizador() {
    clearInterval(intervalo);
}

function finTemporizador(callback) {
    alert("Finalizo el Temporizador!!")
    callback();
}
