import React from "react";
import '../Estilos/navbar.css'

function Navbar(){
    return (
        <div className="nav-principal">
            <div className="logo">
                <img 
                className="imagen-logo"
                src={require(`../Imagenes/header-logo-SF.png`)}
                alt="Logo Alpha Seguridad"
                />
            </div>
            <div className="nav-container">
                <ul className="nav-list">
                    <li className="nav-item">Inicio</li>
                    <li className="nav-item">Alpha Seguridad <span class="material-symbols-outlined">stat_minus_1</span></li>
                    <li className="nav-item">Servicios <span class="material-symbols-outlined">stat_minus_1</span></li>
                    <li className="nav-item">Nuestros Clientes</li>
                    <li className="nav-item">Blog </li>
                    <li className="nav-item">Contacto</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;