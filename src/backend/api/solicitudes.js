app.get('/api/solicitudes', (req, res) => {
  const sql = 'SELECT nombre_cliente, servicio_solicitado, estado FROM solicitudes_servicio';
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});
