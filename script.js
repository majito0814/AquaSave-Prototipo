// script.js

document.addEventListener('DOMContentLoaded', () => {

    /* -------------------------------
       MENÚ INTELIGENTE (oculta al bajar)
    --------------------------------*/
    const header = document.querySelector('.header');
    
    if (header) {
        let lastScrollY = window.scrollY;
        const headerHeight = header.offsetHeight;

        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > headerHeight) {
                header.classList.add('hidden');
            } else {
                header.classList.remove('hidden');
            }

            lastScrollY = currentScrollY;
        });
    }

    /* -------------------------------
       FORMULARIO DE REPORTE DE FUGAS
    --------------------------------*/
    const form = document.getElementById('leak-report');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const requiredInputs = form.querySelectorAll('[required]');
            let allFilled = true;

            requiredInputs.forEach(input => {
                if (!input.value || (input.tagName === 'SELECT' && input.value === '')) {
                    allFilled = false;
                }
            });

            if (allFilled) {
                alert('¡Gracias! Su reporte de fuga ha sido registrado exitosamente. Esto apoya a las autoridades en la detección de fugas.');
                form.reset();
            } else {
                alert('Por favor, completa todos los campos requeridos para enviar el reporte.');
            }
        });
    }
});

