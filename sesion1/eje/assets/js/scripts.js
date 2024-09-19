function calcular() {

    const monto = parseFloat(document.getElementById('monto').value);
    const interes = parseFloat(document.getElementById('interes').value);
    const plazo = parseInt(document.getElementById('plazo').value);

    if (monto > 0 && interes >0 && plazo > 0){
        let resultado = ((monto * (1 + (interes / 100))) / plazo)
        document.getElementById('resultado').innerHTML = `<h3>¡NO TE PREOCUPES! PUEDES PAGARLO EN ${plazo} CUOTAS DE $ ${resultado}.</h3>`;
    } else {
        document.getElementById('resultado').innerHTML = `<h3>¡DEBE INGRESAR VALORES PARA GENERAR EL CALCULO!.</h3>`;
    }

    
}
  