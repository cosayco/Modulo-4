function alerta() {
    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    let email = document.getElementById("email").value
    let asunto = document.getElementById("motivo").value
    let mensaje = document.getElementById("mensaje").value
    let asuntodesc = ""

    switch (asunto) {
        case "problemas":
            asuntodesc = "Problemas con su Cuenta Online."
            break;
        case "restablecer":
            asuntodesc = "Restablecer Contraseña."
            break;
        case "solicitud":
            asuntodesc = "Solicitud de Atencion al Cliente."
            break;
        case "otro":
            asuntodesc = "Otro"
            break;
    }

    alert (`DE: ${nombre} ${apellido} (${email})\nASUNTO: ${asuntodesc}\nMENSAJE:\n${mensaje}.`)
}

