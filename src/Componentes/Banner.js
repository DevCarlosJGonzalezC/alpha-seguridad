import React from "react";
import '../Estilos/banner.css'

function Banner(){
    return (
        <div className="banner-principal">
            <div className="banner-contenedor">
                <img
                className="banner-imagen"
                src={require(`../Imagenes/banner-3.jpg`)}
                alt="Imagen del Banner"
                />
                <div className="info">
                    <button className="btn-banner">Ver mas!</button>
                </div>
                {/* <div className="banner-parrafo">
                OJO PENDIENTE POR MODIFICAR
                    <p>Alpha Seguridad Privada.</p>
                </div> */}
            </div>
        </div>
    )
}

export default Banner;