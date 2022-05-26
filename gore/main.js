formulario = document.getElementById("formulario")
submitButton = document.getElementById("submit")
nombreInput = document.getElementById("nombre")
emailInput = document.getElementById("email")
telefonoInput = document.getElementById("telefono")
mensajeInput = document.getElementById("mensaje")
info = document.getElementById("info")

submitButton.addEventListener("click", function(event) {

    event.preventDefault()

    if (nombreInput.value.trim().length == 0) {
        info.innerHTML = "Por favor ingrese su nombre"
        return
    }

    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!regex.test(String(emailInput.value).toLowerCase())) {
        info.innerHTML = "Por favor ingrese un email válido"
        return
    }
    if (mensajeInput.value.trim().length == 0){
        info.innerHTML = "Por favor ingrese un mensaje"
        return
    }

    info.innerHTML = "Mensaje enviado!"

})