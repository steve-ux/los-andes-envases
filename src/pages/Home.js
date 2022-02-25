import NavBar from "../components/navBar";
import Carrusel from "../components/Carrusel";
import ImageCamion from "../image/_NPH48582.jpg";
import Productos from "../components/Productos";
import Clientes from "../components/Clientes";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
    <NavBar/>
    <Carrusel/>
    <div className="containerIntroHome">
    <h3 className="introHome">Somos un aserradero dedicado a la <span className="resaltados">confección de envases</span> a medida para el envasado de productos agrícolas y hortícolas.</h3>
    </div>
    <img src={ImageCamion} className="imageCamion" alt="Camión cargado con cajas"/>
    <h2 className="nuestrosProductos">Nuestros Productos</h2>
    <p className="textNuestrosProductos">Lorem ipsum dolor sit amet consectetuer. Lorem ipsum dolor sit amet consectetuer. Lorem ipsum dolor sit amet consectetuer.Lorem ipsum dolor sit amet consectetuer. Lorem ipsum dolor sit amet consectetuer. Lorem ipsum dolor sit amet consectetuer. Lorem ipsum dolor sit amet consectetuer. Lorem ipsum dolor sit amet consectetuer. Lorem ipsum dolor sit amet consectetuer. Lorem ipsum dolor sit amet consectetuer.</p>
    <div className="productos">
    <Productos/>
    </div>
    <h2 className="nuestrosProductos">NUESTROS CLIENTES HABLAN</h2>
    <div className="clientes">
    <Clientes/>
    </div>
    <div className="btnConocenosContainer">
    <Link to="/SobreNosotros"><button className="btnConocenos">CONOCENOS</button></Link>
    </div>
    </>
    

  );
}

export default Home;
