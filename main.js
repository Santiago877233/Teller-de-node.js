document.getElementById('bntBuscar').addEventListener('click', async() => {
    const query = document.getElementById('busqueda').value;

    const response = await fetch(`https://localhost:3000/personas?dato=${encodeURIComponent}(query)`,);
    const data = await response.json();

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';

    if (data.length === 0) {
        resultadoDiv.textContent = 'No se encontraron resultados de ninguna persona';
    } else {
        data.forEach(persona => {
            resultadoDiv.innerHTML += `
            <p><strong>Nombre:</strong> ${persona.nombre}</p>
            <p><strong>Identificación:</strong> ${persona.identificacion}</p>
            <p><strong>Teléfono:</strong> ${persona.Teléfono}</p>
            <p><strong>Correo:</strong> ${persona.correo}</p>
            <p><strong>Fecha de Nacimiento:</strong> ${persona.fecha_nacimiento}</p>
            <p><strong>sexo:</strong> ${persona.sexo}</p>
            <hr>
            `;
       });
    }
   
    
})