function calcular() {
    let monto = parseFloat(document.getElementById('monto').value);
    let interes = parseFloat(document.getElementById('interes').value);
    let plazo = parseInt(document.getElementById('plazo').value);

    const factorInteres = (interes) => (1 + (interes / 100));
    const montoPrestamo = (monto, interes) => (monto * interes);
    const calculoCuota = (monto, plazo) => (monto / plazo);
    const calculo = (cuota, plazo) => document.getElementById('resultado').innerHTML = `<h3>¡NO TE PREOCUPES! PUEDES PAGARLO EN ${plazo} CUOTAS DE $ ${cuota}.</h3>`;

    if (monto > 0 && interes >0 && plazo > 0){
        let valorInteres = factorInteres(interes);
        let valorPrestamo = montoPrestamo(monto, valorInteres);
        let valorCuota = calculoCuota(valorPrestamo, plazo);
        calculo(valorCuota, plazo);
    } else {
        document.getElementById('resultado').innerHTML = `<h3>¡DEBE INGRESAR TODOS LOS VALORES PARA GENERAR EL CALCULO!.</h3>`;
    }   
}
  