// backend/app.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const usuarioRoutes = require('./routes/usuarios.routes');
const db = require('./config/db');

app.use(cors());
app.use(express.json());

app.use('/api/usuarios', usuarioRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
