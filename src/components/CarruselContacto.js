import Carousel from 'react-bootstrap/Carousel';
import Image1 from '../image/_NPH4789.jpg';
import Image2 from '../image/DJI_0050.jpg';
import Image3 from '../image/DJI_0073.jpg';

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
            <h1 className="textCaption">Los Andes</h1>
            <p className="textCaption2">de Grupo Puebla.</p>
          </Carousel.Caption>          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Image2}
            alt="Madera vista desde el aire"
          />
      
          <Carousel.Caption className="carruselCaption">
            <h1 className="textCaption">Los Andes</h1>
            <p className="textCaption2">de Grupo Puebla.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Image3}
            alt="Los Andes aserradero desde arriba"
          />
      
          <Carousel.Caption className="carruselCaption">
            <h1 className="textCaption">Los Andes</h1>
            <p className="textCaption2">de Grupo Puebla.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default Carrusel;