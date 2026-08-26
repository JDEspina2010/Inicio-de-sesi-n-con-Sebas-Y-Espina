function inicio() {
    let usuario = document.getElementById("exampleInputEmail1").value;
    let contrasena = document.getElementById("exampleInputPassword1").value;
    if (usuario === "admin" && contrasena == "1234") {
        document.getElementById("notificacion").textContent = "Inicio de sesión correcto"
    } else if (usuario == "alumno" && contrasena == "4321") {
        document.getElementById("notificacion").textContent = "Inicio de sesión correcto"
    } else if (usuario == "" && contrasena == "") {
        document.getElementById("notificacion").textContent = "Llene todas las casillas por fabor"
    } else if (usuario != "" && contrasena == "") {
        document.getElementById("notificacion").textContent = "Llene el espacio de contraseña"
    } else if (usuario == "" && contrasena != "") {
        document.getElementById("notificacion").textContent = "Llene el espacio de usuario"
    } else {
        document.getElementById("notificacion").textContent = "Usuario y/o contraseña incorrecto"
    }
}

