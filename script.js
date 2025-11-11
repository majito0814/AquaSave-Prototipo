// script.js

<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', () => {
    // 1. Obtiene el formulario por su ID
    const form = document.getElementById('leak-report');
    
    // 2. Verifica si el formulario existe
    if (form) {
        // 3. Agrega un "escuchador de eventos" para el envío del formulario
        form.addEventListener('submit', function(event) {
            // Detiene el envío normal del formulario (importante para la simulación)
            event.preventDefault(); 
            
            // 4. Validación básica (Verifica que los campos requeridos no estén vacíos)
            const requiredInputs = form.querySelectorAll('[required]');
            let allFilled = true;
            requiredInputs.forEach(input => {
                // Chequea que el valor exista Y, si es un select, que no sea la opción por defecto
=======
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
>>>>>>> f370d5beba8dcb59cb7dbbcfc5fd8e11f7654309
                if (!input.value || (input.tagName === 'SELECT' && input.value === '')) {
                    allFilled = false;
                }
            });

            if (allFilled) {
<<<<<<< HEAD
                // Muestra un mensaje de éxito simulado
                alert('¡Gracias! Su reporte de fuga ha sido registrado exitosamente. Esto apoya a las autoridades en la detección de fugas en la ciudad.');
                
                // Limpia los campos del formulario después del "envío"
=======
                // Mensaje profesional sin "(Simulación)"
                alert('¡Gracias! Su reporte de fuga ha sido registrado exitosamente. Esto apoya a las autoridades en la detección de fugas.');
                
>>>>>>> f370d5beba8dcb59cb7dbbcfc5fd8e11f7654309
                form.reset();
            } else {
                alert('Por favor, selecciona el tipo de desperdicio y la ubicación para enviar el reporte.');
            }
        });
    }
<<<<<<< HEAD
});
=======
});
>>>>>>> f370d5beba8dcb59cb7dbbcfc5fd8e11f7654309
