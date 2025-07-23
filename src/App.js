import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import alphaSeguridad from './Rutas/alphaSeguridad'
import servicios from './Rutas/servicios'
import Navbar from './Componentes/NavBar';
import Banner from './Componentes/Banner';
import Servicios from './Componentes/Servicios';
import Formulario from './Componentes/formulario';
import Footer from './Componentes/Footer';
                                                                                                                                                
function App() {
  return (    
    <div className="App">
      <Navbar/>
      <Banner/>
      <Servicios/>
      <Formulario/>
      <Footer/>
        <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
    </div>
    
  );
}

const express = require('express');
const app = express();
const usuariosRouter = require('./routes/usuarios');

app.use(express.json());
app.use('/api/usuarios', usuariosRouter);

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});


export default App;
