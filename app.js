document.getElementById('personalForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let isValid = true;
    const fields = ['nombre', 'apellido', 'telefono', 'correo', 'direccion', 'edad'];
    
    fields.forEach(field => {
        const value = document.getElementById(field).value.trim();
        const errorElement = document.getElementById(field + 'Error');
        
        if (value === '') {
            isValid = false;
            errorElement.textContent = 'Este campo es obligatorio';
        } else {
            errorElement.textContent = '';
        }
    });

    const genero = document.querySelector('input[name="genero"]:checked');
    if (!genero) {
        isValid = false;
        document.getElementById('generoError').textContent = 'Selecciona un género';
    } else {
        document.getElementById('generoError').textContent = '';
    }
    
    
    console.log(`Número de campos ingresados: ${camposIngresados}`);
    alert(`Se han ingresado ${camposIngresados} campos.`);

    if (isValid) {
        const dataCard = document.getElementById('dataCard');
        const cardContent = document.getElementById('cardContent');
        cardContent.innerHTML = `
            <p><strong>Nombre:</strong> ${document.getElementById('nombre').value}</p>
            <p><strong>Apellido:</strong> ${document.getElementById('apellido').value}</p>
            <p><strong>Teléfono:</strong> ${document.getElementById('telefono').value}</p>
            <p><strong>Correo:</strong> ${document.getElementById('correo').value}</p>
            <p><strong>Dirección:</strong> ${document.getElementById('direccion').value}</p>
            <p><strong>Edad:</strong> ${document.getElementById('edad').value}</p>
            <p><strong>Género:</strong> ${genero.value}</p>
        `;
        dataCard.style.display = 'block';
        this.reset();
    }

});