function reg() {
    let usu = document.getElementById("exampleInputEmail1").value;
    let cont = document.getElementById("exampleInputPassword1").value;
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