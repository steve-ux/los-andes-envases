import NavBar from "../components/navBar";
import Carrusel from "../components/Carrusel";
import ImageCamion from "../image/_NPH48582.jpg";
import Productos from "../components/Productos";

function Home() {
  return (
    <>
    <NavBar/>
    <Carrusel/>
    <h3 className="introHome">Somos un aserradero dedicado a la confección de envases a medida para el envasado de productos agrícolas y hortícolas.</h3>
    <img src={ImageCamion} className="imageCamion" alt="Camión cargado con cajas"/>
    <h2 className="nuestrosProductos">Nuestros Productos</h2>
    <p className="textNuestrosProductos">Lorem ipsum dolor sit amet consectetuer. Lorem ipsum dolor sit amet consectetuer. Lorem ipsum dolor sit amet consectetuer.Lorem ipsum dolor sit amet consectetuer. Lorem ipsum dolor sit amet consectetuer. Lorem ipsum dolor sit amet consectetuer. Lorem ipsum dolor sit amet consectetuer. Lorem ipsum dolor sit amet consectetuer. Lorem ipsum dolor sit amet consectetuer. Lorem ipsum dolor sit amet consectetuer.</p>
    <div className="productos">
    <Productos/>
    </div>
    </>
    

  );
}

export default Home;
