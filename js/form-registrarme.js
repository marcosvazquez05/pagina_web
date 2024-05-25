document.getElementById('btn-send').addEventListener('click', function() {
    // Obtener los elementos
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const password2 = document.getElementById('password2');
    
    const errorEmail = document.getElementById('error-email');
    const errorPassword = document.getElementById('error-password');
    const errorPassword2 = document.getElementById('error-password2');


    let isValid = true;

            // Validar correo electrónico
            if (!email.value) {
                errorEmail.textContent = 'El correo electrónico es requerido.';
                isValid = false;
            } else if (!/\S+@\S+\.\S+/.test(email.value)) {
                errorEmail.textContent = 'El formato del correo electrónico no es válido.';
                isValid = false;
            }

            // Validar contraseña
            if (!password.value) {
                errorPassword.textContent = 'La contraseña es requerida.';
                isValid = false;
            } else if (password.value.length < 6) {
                errorPassword.textContent = 'La contraseña debe tener al menos 6 caracteres.';
                isValid = false;
            }

            // Validar confirmación de contraseña
            if (password2.value !== password.value) {
                errorPassword2.textContent = 'Las contraseñas no coinciden.';
                isValid = false;
            }

            // Si el formulario es válido, puedes proceder con el envío
            if (isValid) {
                alert('Formulario enviado correctamente.');
                // Aquí puedes enviar el formulario, por ejemplo:
                // document.querySelector('.formulario').submit();
            }
        });