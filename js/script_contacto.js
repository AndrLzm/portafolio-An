let form = document.getElementById('form_contato_c');
let idleTime = 0;
const idleInterval = 1000; // 1 segundo

function resetIdleTime() {
    idleTime = 0;
}

function checkIdleTime() {
    idleTime += 1;
    if (idleTime > 60) { // Cambia el valor según la cantidad de segundos que deseas para la inactividad
        form.classList.add('flip');
        setTimeout(() => {
            form.classList.remove('flip');
        }, 3000); // Ajusta el tiempo de la animación de vuelta (3 segundos en este ejemplo)
        resetIdleTime();
    }
}

document.addEventListener('mousemove', resetIdleTime);
document.addEventListener('keypress', resetIdleTime);

setInterval(checkIdleTime, idleInterval);

function submitForm() {
    // Obtener los datos del formulario
    const formData = new FormData(document.getElementById('form_contato_c'));
  
    // Enviar los datos del formulario al servidor utilizando una solicitud AJAX
    fetch('/send_email.php', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          alert('¡Tu mensaje ha sido enviado!');
        } else {
          alert('Ha ocurrido un error. Por favor, intente nuevamente más tarde.');
        }
      });
  }
  