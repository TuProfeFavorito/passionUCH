//login
const $correo = $("#correo");
const $password = $("#password");
localStorage.removeItem("user");
localStorage.removeItem("latitud");
localStorage.removeItem("longitud");
$("#submitForm").on("click", function(e) {
    e.preventDefault();
    if ($correo.val() == '') {
        alert("Ingrese su correo");
    }
    if ($password.val() == '') {
        alert("Ingrese su password");
    }
    /*
    $.ajax({
        //
    });*/
    //localStorage
    localStorage.setItem("user", "TICONA VEGA ERINSON THEO");
    // Verificamos si el navegador admite la geolocalización
    if ("geolocation" in navigator) {
        // Obtenemos la ubicación del usuario
        navigator.geolocation.getCurrentPosition(function(position) {
        // Obtenemos las coordenadas de latitud y longitud
        const latitud = position.coords.latitude;
        const longitud = position.coords.longitude;
        
        // Imprimimos las coordenadas en la consola
        localStorage.setItem("latitud", latitud);
        localStorage.setItem("longitud", longitud);
        // Aquí puedes realizar cualquier acción adicional que desees con las coordenadas
        });
    } else {
        console.log("La geolocalización no está disponible en este navegador.");
    }
    window.location.href = "dashboard.html";
});

