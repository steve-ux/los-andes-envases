import Producto1 from "../image/_NPH4856.jpg";
import Producto2 from "../image/_NPH4421.jpg";
import Producto5 from "../image/5.jpg";
import Producto6 from "../image/4.jpg";
import Producto7 from "../image/3.jpg";

function Productos() {
  return (
    <div className="galleryContainer">
      <div className="galleryItem">
        <img src={Producto5} alt="" className="galleryImg" />
        <h2 className="galleryTitle">CAJÓN ALTO</h2>
      </div>
      <div className="galleryItem">
        <img src={Producto6} alt="" className="galleryImg" />
        <h2 className="galleryTitle">CAJÓN FRUTA</h2>
      </div>
      <div className="galleryItem">
        <img src={Producto7} alt="" className="galleryImg" />
        <h2 className="galleryTitle">CAJÓN CORTO</h2>
      </div>
      <div className="galleryItem">
        <img src={Producto1} alt="" className="galleryImg" />
        <h2 className="galleryTitle">PERFILES</h2>
      </div>
      <div className="galleryItem">
        <img src={Producto2} alt="" className="galleryImg" />
        <h2 className="galleryTitle">LÁMINAS</h2>
      </div>
    </div>
  );
}

export default Productos;
