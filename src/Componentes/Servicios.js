import React from "react";
import '../Estilos/servicios.css'

function Servicios(){
    return(
        <div className="servicios-container">
                <div className="servicios-texto">
                    <h2 className="servicios-titulo">Descubre Nuestros Portafolio De Servicios.</h2>
                </div>
            <div className="contenedor-card">
                <div className="servicios-card">
                    <img 
                    className="servicios-imagen"
                    src={require(`../Imagenes/card-1.png`)}
                    alt="card1"
                    />
                    <h3 className="servicios-profesion">Vigilante de Seguridad</h3>
                </div>
                <div className="servicios-card">
                    <img 
                    className="servicios-imagen"
                    src={require(`../Imagenes/guia-canino-1.png`)}
                    alt="card1"
                    />
                    <h3 className="servicios-profesion">Guia Canino</h3>
                </div>
                <div className="servicios-card">
                    <img 
                    className="servicios-imagen"
                    src={require(`../Imagenes/escolta-1.png`)}
                    alt="card1"
                    />
                    <h3 className="servicios-profesion">Escolta.</h3>
                </div>
                <div className="servicios-card">
                    <img 
                    className="servicios-imagen"
                    src={require(`../Imagenes/card-4.jpg`)}
                    alt="card1"
                    />
                    <h3 className="servicios-profesion">Seguridad Electronica.</h3>
                </div>
            </div>
        </div>
    )
}

export default Servicios;