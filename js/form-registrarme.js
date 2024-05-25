let btnSend = document.querySelector("#btn-send");

btnSend.addEventListener("click", function() {
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");
    let password2 = document.querySelector("#password2");
    // se crea una variable para cada input del form
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // variable para comprobar email
});


if(emailRegex.test(email.value)) {



    document.querySelector("#error-email").innerHTML ="El email no tiene un formato correcto"
}
if(password.value.trim()=="") {

    document.querySelector("#error-password").innerHTML ="La contraseña no es correcta"
}
if(password2.value.trim()=="") {

    document.querySelector("#error-password2").innerHTML ="La contraseña no es igual"
}