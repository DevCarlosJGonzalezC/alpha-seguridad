import React from "react";
import '../Estilos/footer.css'

function Footer(){
    return (
        <div className="footer-contenedor">
            <div className="footer-logo">
                <img 
                className="footer-escudo" 
                src={require(`../Imagenes/escudo.png`)}
                alt="Escudo de Alpha Seguridad"
                />
                <img 
                className="footer-alpha" 
                src={require(`../Imagenes/alpha seguridad.png`)}
                alt="Imagen del nombre de alpha"
                />
            </div>
            <div className="footer-servicios">
                <h2 className="footer-subtitulo">Servicios</h2>
                <p className="footer-parrafo">Vigilancia con o sin arma.</p>
                <p className="footer-parrafo">Vigilancia canina</p>
                <p className="footer-parrafo">Escoltas</p>
                <p className="footer-parrafo">Supervisor de Vigilancia</p>
            </div>
            <div className="footer-contacto">
                <h2 className="footer-subtitulo">Contacto</h2>
                <p className="footer-parrafo"><strong>Ciudad:</strong> Medellín, Colombia</p>
                <p className="footer-parrafo"><strong>Direccion:</strong> Carrera 76 No 32C-06</p>
                <p className="footer-parrafo"><strong>Email:</strong> alphamed@alphaseguridad.com.co</p>
                <p className="footer-parrafo"><strong>Telefono:</strong> 604 4140147</p>
            </div>
            <div className="footer-redesSociales">
                <p className="footer-parrafo"><a href="#" className="footer-link">
                    <img 
                    className="footer-red"
                    src={require(`../icons/facebook.png`)}
                    alt="Facebook"
                    />
                    </a></p>
                <p className="footer-parrafo"><a href="#" className="footer-link">
                    <img 
                    className="footer-red" 
                    src={require(`../icons/whatsapp.png`)}
                    alt="Whatsapp"
                    />
                    </a></p>
                <p className="footer-parrafo"><a href="#" className="footer-link">
                    <img 
                    className="footer-red" 
                    src={require(`../icons/youtube.png`)}
                    alt="Youtube"
                    />
                    </a></p>
                <p className="footer-parrafo"><a href="#" className="footer-link">
                    <img 
                    className="footer-red" 
                    src={require(`../icons/gorjeo.png`)}
                    alt="X"
                    />
                    </a></p>
            </div>
        </div>
    )
}

export default Footer;