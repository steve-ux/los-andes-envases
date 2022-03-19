import Carousel from 'react-bootstrap/Carousel';
import Image1 from '../image/DJI_0077.jpg';
import Image2 from '../image/_NPH4870.jpg';
import Image3 from '../image/_NPH4735.jpg';

function Carrusel() {
    return (
        <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 imgCarrusel"
            src={Image1}
            alt="Pallets de madera"
          />
          <Carousel.Caption className="carruselCaption">
            <h1 className="textCaption">Calidad y compromiso</h1>
            <p className="textCaption2">Envases Los Andes.</p>
          </Carousel.Caption>          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 imgCarrusel"
            src={Image2}
            alt="Madera vista desde el aire"
          />
      
          <Carousel.Caption className="carruselCaption">
            <h1 className="textCaption">Atención personalizada</h1>
            <p className="textCaption2">Envases Los Andes.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 imgCarrusel"
            src={Image3}
            alt="Los Andes aserradero desde arriba"
          />
      
          <Carousel.Caption className="carruselCaption">
            <h1 className="textCaption">Lo necesario para su producto agrícola</h1>
            <p className="textCaption2">Envases Los Andes.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default Carrusel;