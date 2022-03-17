import NavBar from "../components/navBar"
 

function About() {
    return (
      
        <>
          <NavBar/>
          <div className="info-text">
            <div className="text">
            <p>SOMOS UN ASERRADERO DEDICADO A LA CONFECCIÓN DE<br></br>ENVASES A MEDIDA PARA EL ENVASADO DE PRODUCTOS<br></br>AGRÍCOLAS Y HORTÍCOLAS. </p>
            </div>
            <img className='camion-img' src={require("../image/record.jpg")}/>
          </div>
          <div className="pagDos">
            <div className="textPagDos">
              <h1 className="textProductos" >Nuestros Productos</h1>
              <div className="parafoProducto"><p> qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem ut labore et dolore magnam aliquam quaerat voluptatem  </p></div>
            </div>
            <div className="imgProduct">
              <div className="pUno"><p></p></div>
              <div className="pDos"><p></p></div> 
              <div className="pTres"><p></p></div>         
              <div className="pCuatro"><p></p></div>
            </div>
          </div>
        </>
    );
  }
  
  export default About;