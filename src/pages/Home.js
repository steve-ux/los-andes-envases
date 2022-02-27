import NavBar from "../components/navBar";
import Carrusel from "../components/Carrusel";
import Footer from "../components/Footer";
import ImageCamion from "../image/_NPH48582.jpg";
import ImageTablas from "../image/_NPH47682.jpg";
import Productos from "../components/Productos";
import Clientes from "../components/Clientes";
import Formulario from "../components/Formulario";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <NavBar />
      <Carrusel />
      <div className="containerIntroHome">
        <h3 className="introHome">
          Somos un aserradero dedicado a la{" "}
          <span className="resaltados">confección de envases</span> a medida
          para el envasado de productos agrícolas y hortícolas.
        </h3>
      </div>
      <img
        src={ImageCamion}
        className="imageCamion"
        alt="Camión cargado con cajas"
      />
      <h2 className="nuestrosProductos">Nuestros Productos</h2>
      <p className="textNuestrosProductos">
        Lorem ipsum dolor sit amet consectetuer. Lorem ipsum dolor sit amet
        consectetuer. Lorem ipsum dolor sit amet consectetuer.Lorem ipsum dolor
        sit amet consectetuer. Lorem ipsum dolor sit amet consectetuer. Lorem
        ipsum dolor sit amet consectetuer. Lorem ipsum dolor sit amet
        consectetuer. Lorem ipsum dolor sit amet consectetuer. Lorem ipsum dolor
        sit amet consectetuer. Lorem ipsum dolor sit amet consectetuer.
      </p>
      <div className="productos">
        <Productos />
      </div>
      <h2 className="nuestrosProductos">NUESTROS CLIENTES HABLAN</h2>
      <div className="clientes">
        <Clientes />
      </div>
      <div className="btnConocenosContainer">
        <Link to="/SobreNosotros">
          <button className="btnConocenos">CONOCENOS</button>
        </Link>
      </div>
      <div className="containerTablas">
        <div className="containerTextTablas">
          <h2 className="nuestrosProductos2">¡CONSEGUÍ NUESTROS PRODUCTOS!</h2>
          <p className="parrafoTablas">
            Cumplimos con todos los estándares internacionales para asegurarnos
            de obtener la mejor calidad en productos. Además te asesoramos en
            cada paso.
          </p>
          <Link to="/Contacto">
          <button className="btnConocenos2">CONTACTANOS</button>
        </Link>
        </div>        
        <img className="imgTablas" src={ImageTablas} alt="Tablas apiladas" />
      </div>
      <Formulario/>
      <h2 className="nuestrosProductos">VÍAS DE CONTACTO</h2>
      <div>
      <iframe title="Maps de Aserradero Los Andes" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2418.1271641212406!2d-68.66608473482682!3d-32.99139287716485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e6cd86adec33b%3A0xf1827e501699c7b4!2sAserradero%20y%20F%C3%A1brica%20de%20Envases%20Los%20Andes!5e0!3m2!1ses-419!2sar!4v1645999886176!5m2!1ses-419!2sar" width="100%" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy"></iframe>
      </div>
      <Footer/>     
    </>
  );
}

export default Home;
