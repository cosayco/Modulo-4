function convertirFahrenheitACelsius(fahrenheit) {
    return new Promise((resolve, reject) => {
        if (typeof fahrenheit !== "number") {
            reject("El valor ingresado no es un número")
        } else {
            const celsius = (5 / 9) * (fahrenheit - 32)
            resolve(celsius)
        }
    });
}

async function convertirTemperatura() {
    try {
        const fahrenheit = parseFloat(document.getElementById("fahrenheit").value)
        const celsius = await convertirFahrenheitACelsius(fahrenheit)
        document.getElementById("celsius").textContent = Math.round(celsius) + " °C"
    } catch (error) {
        document.getElementById("celsius").textContent = error
    }
}
