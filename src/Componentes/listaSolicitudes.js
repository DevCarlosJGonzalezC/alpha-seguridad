import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ListaSolicitudes() {
  const [solicitudes, setSolicitudes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/solicitudes')
      .then(res => setSolicitudes(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Listado de Solicitudes</h2>
      <table>
        <thead>
          <tr>
            <th>Cliente</th>
            <th>Servicio Solicitado</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {solicitudes.map((item, index) => (
            <tr key={index}>
              <td>{item.nombre_cliente}</td>
              <td>{item.servicio_solicitado}</td>
              <td>{item.estado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListaSolicitudes;
