const ejercicios = ["Sentadillas", "Bancos", "Peso Muerto", "Prensas"];

function* generarRutina() {
    let diaTotal = 1; // Contador total de días
    while (true) {
        const ejercicio = ejercicios[diaTotal % ejercicios.length];
        yield `Día ${diaTotal}: ${ejercicio}`;
        diaTotal = diaTotal ++;
    }
}

// Ejemplo de uso
function main(){
    let semanas = parseInt(document.getElementById("semana").value)
    let dias = parseInt(document.getElementById("dia").value)
    let rutinaGenerador = generarRutina();

    console.log(`Semanas: ${semanas}.`)
    console.log(`Días: ${dias}.`)
    console.log(rutinaGenerador.next().value);
    console.log(rutinaGenerador.next().value);
    console.log(rutinaGenerador.next().value);
    console.log(rutinaGenerador.next().value);
    console.log(rutinaGenerador.next().value);
}
