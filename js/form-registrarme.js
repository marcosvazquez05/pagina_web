document.getElementById('btn-send').addEventListener('click', function() {
    // Obtener los elementos
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const password2 = document.getElementById('password2');
    
    const errorEmail = document.getElementById('error-email');
    const errorPassword = document.getElementById('error-password');
    const errorPassword2 = document.getElementById('error-password2');


    let isValid = true;

            if (!email.value) {
                errorEmail.textContent = 'El correo electrónico es requerido.';
                isValid = false;
            } else if (!/\S+@\S+\.\S+/.test(email.value)) {
                errorEmail.textContent = 'El formato del correo electrónico no es válido.';
                isValid = false;
            }

            if (!password.value) {
                errorPassword.textContent = 'La contraseña es requerida.';
                isValid = false;
            } else if (password.value.length < 6) {
                errorPassword.textContent = 'La contraseña debe tener al menos 6 caracteres.';
                isValid = false;
            }

            if (password2.value !== password.value) {
                errorPassword2.textContent = 'Las contraseñas no coinciden.';
                isValid = false;
            }

            if (isValid) {
                alert('Formulario enviado correctamente.');
            }
        });