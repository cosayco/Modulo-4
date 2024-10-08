$(document).ready(function(){

  function* cargarPersonajes(inicio, termino) {
    let urlSW = "https://swapi.dev/api/people/"

    for (let i = inicio; i <= termino; i++) {
        let datos = yield $.ajax({
          url: urlSW + i,
          method: 'GET',
          dataType: 'json'
        })

        yield {
          nombre: datos.name,
          talla: datos.height,
          peso: datos.mass
        }
    }
  }

  function retraso(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  async function mostrarPersonajes(generator, id, color) {
    detenerMostrar = false
    for (let resultado = generator.next(); !resultado.done; resultado = generator.next(await resultado.value)){
      if (detenerMostrar) break
      if (resultado.value && resultado.value.nombre) {
        $(id).append(`<div class="character"><p class="circulo ${color}"></p><strong>${resultado.value.nombre}</strong>Estatura: ${resultado.value.talla} cm. Peso: ${resultado.value.peso} kg.</div>`);
        await retraso(1000);
      }      
    }
  }

  function limpiarPersonajes(){
    $("#primeros").empty()
    $("#segundos").empty()
    $("#terceros").empty()
  }

  $("#primero").mouseenter(function() {
    limpiarPersonajes()
    let generator = cargarPersonajes(1, 5)
    mostrarPersonajes(generator, "#primeros", "rojo")
  }).mouseleave(function(){
    detenerMostrar = true
  })

  $("#segundo").mouseenter(function() {
    limpiarPersonajes()
    let generator = cargarPersonajes(6, 10)
    mostrarPersonajes(generator, "#segundos", "verde")
  }).mouseleave(function(){
    detenerMostrar = true
  })

  $("#tercero").mouseenter(function() {
    limpiarPersonajes()
    let generator = cargarPersonajes(12, 16)
    mostrarPersonajes(generator, "#terceros", "azul")
  }).mouseleave(function(){
    detenerMostrar = true
  })
  
})
