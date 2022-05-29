import NavBar from "../components/Navigator/Navbar";
import Carrusel from "../components/CarruselNosotros";
import Image1 from "../image/equipo.webp";
import Image2 from "../image/señores-puebla.jpg";
import Footer from "../components/Footer";
import Image3 from "../image/calidad.png";
import Image4 from "../image/logistica.png";
import Image5 from "../image/compromiso.png";
import Image6 from "../image/tecnologia.png";

function About() {
  return (
    <>
      <NavBar />
      <Carrusel />
      <div className="info-text">
        <h1 className="texto-equipo">EQUIPO LOS ANDES</h1>
        <img
          src={Image1}
          className="img-equipo"
          alt="Equipo de Los Andes Envases"
        />
      </div>
      <div className="nuestros-numeros">
        <h2>
          NUESTROS <span style={{ color: "green" }}>NÚMEROS</span>
        </h2>
        <div className="container-numeros">
          <div>
            <p className="texto-primeroT">80</p>
            <p className="text-secundario">Años de experiencia</p>
          </div>
          <div>
            <p className="texto-primeroT">200</p>
            <p className="text-secundario">Personas trabajando</p>
          </div>
          <div>
            <p className="texto-primeroT">2</p>
            <p className="text-secundario">Sedes en Mendoza y Salta</p>
          </div>
        </div>
      </div>
      <div className="contenedor-tercero">
        <div className="contImg-valores">
          <img
            src={Image2}
            className="img-valores"
            alt="Empleado frente a la cámara y un horno de fondo"
          />
        </div>
        <div className="texto-valores">
          <h1>MISIÓN</h1>
          <p className="text-nosotros-t">
            Nos dedicamos a diseñar, producir y comercializar envases de madera
            de punta para diversas industrias desde más de 80 años con los
            mismos principios de nuestro origen. Con la finalidad de satisfacer
            las necesidades de nuestros clientes estamos atentos a sus
            requerimientos e innovamos permanentemente, mejorando continuamente
            los procesos con tecnología de vanguardia y la calidad profesional
            de nuestros colaboradores.
          </p>
          <h1>VISIÓN</h1>
          <p className="text-nosotros-t">
            Ser la empresa líder del país en fabricación de envases de madera
            para la industria frutihortícola del país. Con materia prima de
            producción propia y mediante un equipo de colaboradores
            especializados y comprometidos, brindamos soluciones integrales de
            calidad a los diversos requerimientos del mercado, con tecnología de
            avanzada y una logística de calidad.
          </p>
        </div>
      </div>

      <div className="content-ultimo">
        <div className="textFinal">
          <h1>VALORES</h1>
          <p className="ultimo-text">
            <br></br>
            <br></br>
            Ofrecer una amplia variedad de{" "}
            <span className="resaltados">
              productos y servicios de calidad,
            </span>{" "}
            asesoramiento y atención personalizada son los pilares que guían la
            empresa.<br></br>
            La materia prima con que se elaboran los envases es producto de tala
            de árboles propios sembrados para tal fin, asegurando el{" "}
            <span className="resaltados">cuidado del medio ambiente</span> en
            todos los aspectos y reduciendo el impacto ambiental.
          </p>
        </div>
      </div>
      <div className="iconos-valores">
        <div className="container-iconos">
          <div>
            <p className="texto-primeroT">
              <img className="imagenC" src={Image3} alt="calidad" />
            </p>
            <p className="text-icons">Servicio de calidad</p>
          </div>
          <div>
            <p className="texto-primeroT">
              <img className="imagenD" src={Image4} alt="logística" />
            </p>
            <p className="text-icons">Logística de punta</p>
          </div>
          <div>
            <p className="texto-primeroT">
              <img className="imagenE" src={Image5} alt="compromiso" />
            </p>
            <p className="text-icons">Compromiso social</p>
          </div>
          <div>
            <p className="texto-primeroT">
              <img className="imagenD" src={Image6} alt="tecnología" />
            </p>
            <p className="text-icons">Avance tecnológico</p>
          </div>
        </div>
      </div>
<br></br>
      <Footer />
    </>
  );
}

export default About;
