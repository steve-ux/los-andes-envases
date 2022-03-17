import NavBar from "../components/navBar";
import Carrusel from "../components/CarruselNosotros";
import Footer from "../components/Footer";
 

function About() {
    return (
      
        <>
          <NavBar/>
          <Carrusel/>
          <div className="info-text">
            <div className="text">
            <p>SOMOS UN ASERRADERO DEDICADO A LA CONFECCIÓN DE<br></br>ENVASES A MEDIDA PARA EL ENVASADO DE PRODUCTOS<br></br>AGRÍCOLAS Y HORTÍCOLAS. </p>
            </div>
            <img className='camion-img' src={require("../image/record.jpg")}/>
          </div>
          <Footer/>
        </>
    );
  }
  
  export default About;