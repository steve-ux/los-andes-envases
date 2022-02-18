import NavBar from "../components/navBar"

function About() {
    return (
      
        <>
          <NavBar/>
          <div className="info-text">
            <p>SOMOS UN ASERRADERO DEDICADO A LA CONFECCIÓN DE<br></br>ENVASES A MEDIDA PARA EL ENVASADO DE PRODUCTOS<br></br>AGRÍCOLAS Y HORTÍCOLAS. </p>
            <img className='camion-img' src={require('../image/camion.jpeg')}/>
          </div>
        </>
    );
  }
  
  export default About;