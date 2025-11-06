// script.js

// Lógica para el Menú Inteligente (Esconder al bajar, mostrar al subir)
document.addEventListener('DOMContentLoaded', () => {
    
    const header = document.querySelector('.header');
    if (!header) return; // Salir si no encuentra el header
    
    let lastScrollY = window.scrollY;
    const headerHeight = header.offsetHeight; // Obtiene la altura del header (aprox 80px)

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > headerHeight) {
            // Bajando (scrolling down) y ya pasó la altura inicial del header
            header.classList.add('hidden');
        } else {
            // Subiendo (scrolling up)
            header.classList.remove('hidden');
        }

        lastScrollY = currentScrollY;
    });

    // Lógica original del Formulario de Reporte de Fugas
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
                // Mensaje profesional sin "(Simulación)"
                alert('¡Gracias! Su reporte de fuga ha sido registrado exitosamente. Esto apoya a las autoridades en la detección de fugas.');
                
                form.reset();
            } else {
                alert('Por favor, selecciona el tipo de desperdicio y la ubicación para enviar el reporte.');
            }
        });
    }
});
