import NavBar from "../components/Navigator/Navbar";
import Carrusel from "../components/CarruselNosotros";
import Image1 from '../image/equipo.jpg';
import Image2 from '../image/valores.jpg';
import Footer from "../components/Footer";
import Image3 from '../image/_NPH4858.jpg';
import Image4 from '../image/_NPH4642.jpg';

function About() {
    return (
      
        <>
          <NavBar/>
          <Carrusel/>
          <div className="info-text" >
            <h1 className="texto-equipo">EQUIPO LOS ANDES</h1>
           <img src={Image1} className="img-equipo" alt="Equipo de Los Andes Envases"/> 
          </div>
          <div className="contenedor-textoE"> 
            <div className="text-equipo"> 
            <p className="texto-primeroT">DIRECCIÓN</p>
            <p className="text-secundario">
            Actualmente dirigida por la tercera y cuarta generación de la familia, Los Andes S.A.

            </p>
            </div>
            <div className="text-equipo">
            <p className="texto-primeroT">ANTIGÜEDAD</p>
            <p className="text-secundario">
            Desde hace más de 95 años satisface la demanda en envases, de los principales productores del país.
            </p>
            </div>
            <div className="text-equipo">
            <p className="texto-primeroT">PRODUCCIÓN</p>
            <p className="text-secundario">
            Una producción diaria de unas 15.000 unidades para más de 1500 familias argentinas.
            </p>
            </div>
          </div>
          <div className="contenedor-tercero">
          <div className="contImg-valores">
          <img src={Image2} className="img-valores" alt="Empleado frente a la cámara y un horno de fondo"/> 
          </div>
          <div className="texto-valores">
            <h1>ENVASES LOS ANDES</h1>
            <p className="text-nosotros-t">
            Desde 1935 la fabricación de envases de madera es la actividad pionera de la familia Puebla. Desde hace más de 95 años satisface la demanda en envases, de los principales productores frutihortícolas de la región.<br></br><br></br>
            Con un propio sistema de logística y sucursales distribuidas en puntos estratégicos del país, garantiza la producción y entrega de productos donde el empresario productor lo requiera.<br></br><br></br>Con ansias del perfeccionamiento constante y de la expansión de la industria en envases, el plan de desarrollo apuesta por la incorporación de tecnología que permite duplicar la capacidad de producción.
            </p>
          </div>
          </div>
          <div className="content-ultimo">
            
          <img className="imagenU" src={Image4} alt="Camión listo para entregar envases"/>
          <img className="imagenD" src={Image3} alt="Dos empleados cortando madera"/>
          <div className="textFinal">
            <h1>
              VALORES
            </h1>
            <p className="ultimo-text">
            
            <br></br><br></br>
            Ofrecer una amplia variedad de productos y servicios de calidad, asesoramiento y atención personalizada son los pilares que guían la empresa.<br></br><br></br>
SERVICIO DE CALIDAD – LOGÍSTICA DE PUNTA- COMPROMISO SOCIAL – AVANCE TECNOLÓGICO

            </p>
          </div>
          </div>
          <Footer/>  
    
        </>
    );
  }
  
  export default About;