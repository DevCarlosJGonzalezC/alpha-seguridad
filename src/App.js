import './App.css';
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
    </div>
  );
}

export default App;
