document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        var nombre = document.getElementsByName("nombre")[0].value;
        var apellido = document.getElementsByName("apellido")[0].value;
        var email = document.getElementsByName("email")[0].value;

        if (nombre === "" || apellido === "" || email === "") {
            alert("Por favor complete todos los campos obligatorios.");
            event.preventDefault();
        }
    });
});