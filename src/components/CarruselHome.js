import Carousel from 'react-bootstrap/Carousel';
import Image1 from '../image/DJI_0077.webp';
import Image2 from '../image/_NPH4870.webp';
import Image3 from '../image/_NPH4735.webp';

function Carrusel() {
    return (
        <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 imgCarrusel"
            src={Image1}
            alt="Pallets de madera"
          />
          <Carousel.Caption className="center carruselCaption">
            <h1 className="textCaption">Calidad y compromiso</h1>
            <p className="textCaption2">DESDE 1936.</p>
          </Carousel.Caption>          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 imgCarrusel"
            src={Image2}
            alt="Madera vista desde el aire"
          />
      
          <Carousel.Caption className="carruselCaption">
            <h1 className="textCaption">Logística de punta</h1>
            <p className="textCaption2">DESDE HACE MÁS DE 95 AÑOS.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 imgCarrusel"
            src={Image3}
            alt="Los Andes aserradero desde arriba"
          />
      
          <Carousel.Caption className="carruselCaption">
            <h1 className="textCaption">Avance tecnológico</h1>
            <p className="textCaption2">Y CONSTANTE EXPANSIÓN DE LA INDUSTRIA.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default Carrusel;