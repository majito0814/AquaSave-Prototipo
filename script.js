// script.js

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
                if (!input.value || (input.tagName === 'SELECT' && input.value === '')) {
                    allFilled = false;
                }
            });

            if (allFilled) {
                // Muestra un mensaje de éxito simulado
                alert('¡Gracias! Su reporte de fuga ha sido registrado exitosamente (Simulación). Esto apoya a las autoridades en la detección de fugas.');
                
                // Limpia los campos del formulario después del "envío"
                form.reset();
            } else {
                alert('Por favor, selecciona el tipo de desperdicio y la ubicación para enviar el reporte.');
            }
        });
    }
});