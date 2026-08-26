function reg() {
    let usu = document.getElementById("usuario").value;
    let cont = document.getElementById("cont").value;
    if (usu != "" && cont != "") {
        document.getElementById("mensajes").textContent = "Datos guardados"
    } else if (usu == "" && cont == "") {
        document.getElementById("mensajes").textContent = "Llene todas las casillas por fabor"
    } else if (usu != "" && cont == "") {
        document.getElementById("mensajes").textContent = "Llene el espacio de contraseña"
    } else if (usu == "" && cont != "") {
        document.getElementById("mensajes").textContent = "Llene el espacio de usuario"
    }
}