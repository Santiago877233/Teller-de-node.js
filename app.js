const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());


const personas = [
    { id: 1, identificacion: '123456', nombres: 'Pepito Perez', 
    telefono: '3111234567', correo: 'pepito@mail.com', 
      fechaNacimiento: '1990-05-10', sexo: 'F' },
  
    { id: 2, identificacion: '654321', nombres: 'Juanito Pérez', 
      telefono: '3189876543', correo: 'jp@mail.com', 
      fechaNacimiento: '1985-08-20', sexo: 'M' },
  
    { id: 3, identificacion: '111111', nombres: 'Pedro Navaja', 
      telefono: '3131111111', correo: 'marta@mail.com', 
      fechaNacimiento: '1992-07-15', sexo: 'F' },
  
    { id: 4, identificacion: '222222', nombres: 'Andrea Mejía', 
      telefono: '3122222222', correo: 'carlos@mail.com', 
      fechaNacimiento: '1980-01-05', sexo: 'M' },
  
    { id: 5, identificacion: '333333', nombres: 'Lucía Torres', 
      telefono: '3143333333', correo: 'lucia@mail.com', 
      fechaNacimiento: '1995-12-12', sexo: 'F' },
  
    { id: 6, identificacion: '444444', nombres: 'Jorge Herrera', 
      telefono: '3154444444', correo: 'jorge@mail.com', 
      fechaNacimiento: '1988-09-09', sexo: 'M' },
  
    { id: 7, identificacion: '555555', nombres: 'Diomedez Díaz', 
      telefono: '3165555555', correo: 'cacique@mail.com', 
      fechaNacimiento: '1991-11-30', sexo: 'F' },
  
    { id: 8, identificacion: '666666', nombres: 'Poncho Zuleta', 
      telefono: '3176666666', correo: 'poncho@mail.com', 
      fechaNacimiento: '1979-03-17', sexo: 'M' },
  
    { id: 9, identificacion: '777777', nombres: 'Diana López', 
      telefono: '3187777777', correo: 'diana@mail.com', 
      fechaNacimiento: '1993-06-22', sexo: 'F' },
  
    { id: 10, identificacion: '888888', nombres: 'Ricardo Silva', 
      telefono: '3198888888', correo: 'ricardo@mail.com', 
      fechaNacimiento: '1987-10-25', sexo: 'M' },
];
app.get('/persona', (req, res) => {
    const dato = req.query.dato?.toLowerCase() || ''; 
    const resultados = personas.filter(p => p.identificacion.includes(dato) || p.nombres.toLowerCase().
    includes(dato)
    );
  
    res.json(resultados);
  });
  
  app.listen(5000, () => {
    console.log('API ejecutandose en http://localhost:5000');
  });
  