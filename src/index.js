const express = require('express');
const app = express();
const path = require('path');

// Middleware para parsear JSON
app.use(express.json());

//img
app.use('/img', express.static(path.join(__dirname, 'img')));
// Servir archivos estáticos desde la carpeta 'assets'
app.use('/css', express.static(path.join(__dirname, 'css')));

// Redirigir a /login cuando se accede a la raíz
app.get('/', (req, res) => {
  res.redirect('/login');
});

// Cargar el archivo login.html cuando se accede a /login
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'view', 'login.html'));
});

// Nueva ruta para manejar la solicitud a /api/servicio
app.post('/api/servicio', (req, res) => {
  // Responder con el mensaje "servicios unach"
  res.json({ success: true, message: 'servicios unach' });
});

app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});

