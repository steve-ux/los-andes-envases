import Carousel from 'react-bootstrap/Carousel';
import Image1 from '../image/_NPH4789.webp';
import Image2 from '../image/_NPH4618.webp';
import Image3 from '../image/_NPH4421.webp';

function Carrusel() {
    return (
        <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Image1}
            alt="Pallets de madera"
          />
          <Carousel.Caption className="carruselCaption">
            <h1 className="textCaption">Vasta Experiencia</h1>
            <p className="textCaption2">DIRIGIDA POR TERCERA Y CUARTA GENERACIÓN FAMILIAR.</p>
          </Carousel.Caption>          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Image2}
            alt="Madera vista desde el aire"
          />
      
          <Carousel.Caption className="carruselCaption">
            <h1 className="textCaption">Pura madera</h1>
            <p className="textCaption2">DEDICADOS A DISEÑAR, PRODUCIR Y COMERCIALIZAR ENVASES.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Image3}
            alt="Los Andes aserradero desde arriba"
          />
      
          <Carousel.Caption className="carruselCaption">
            <h1 className="textCaption">Cuidado del medio ambiente</h1>
            <p className="textCaption2">TALA DE ÁRBOLES PROPIOS SEMBRADOS PARA TAL FIN.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default Carrusel;