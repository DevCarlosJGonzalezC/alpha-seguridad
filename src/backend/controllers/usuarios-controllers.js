// backend/controllers/usuarios.controller.js
const db = require('../config/db');

const obtenerUsuarios = (req, res) => {
  db.query('SELECT * FROM usuarios', (err, results) => {
    if (err) {
      console.error('Error al obtener usuarios:', err);
      res.status(500).json({ error: 'Error en el servidor' });
    } else {
      res.json(results);
    }
  });
};

module.exports = {
  obtenerUsuarios,
};
