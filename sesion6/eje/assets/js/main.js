const ciudades = [
    { nombre: "Santiago", zona: 0, bandera: "cl" },
    { nombre: "París", zona: 5, bandera: "fr" },
    { nombre: "Londres", zona: 4, bandera: "gb" },
    { nombre: "Nueva York", zona: -1, bandera: "us" },
    { nombre: "San Petersburgo", zona: 6, bandera: "ru" },
    { nombre: "Beijing", zona: 11, bandera: "cn" },
    { nombre: "Seúl", zona: 12, bandera: "kr" }
]

function actualizaHora() {
    const ahora = new Date()
    ciudades.forEach((ciudad, indice) => {
        const horaLocal = new Date(ahora.getTime() + ciudad.zona * 3600 * 1000)
        document.getElementById(`time-${indice}`).textContent = horaLocal.toLocaleTimeString()
    })
}

function crearReloj(ciudad, indice) {
    const relojDiv = document.createElement("div")
    relojDiv.className = "col-md-6 reloj"
    relojDiv.innerHTML = `
        <i class="flag-icon flag-icon-${ciudad.bandera}"></i>
        <h4>${ciudad.nombre}</h4>
        <p id="time-${indice}">--:--:--</p>
    `
    document.getElementById("relojes").appendChild(relojDiv)
}

function iniciarRelojes() {
    ciudades.forEach((ciudad, indice) => {
        setTimeout(() => {
            crearReloj(ciudad, indice)
            if (indice === 0) {
                setInterval(actualizaHora, 1000)
            }
        }, indice * 4000)
    });
}

iniciarRelojes()
