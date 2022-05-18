import Producto1 from "../image/_NPH4856.webp";
import Producto2 from "../image/_NPH4421.webp";
import Producto5 from "../image/5.webp";
import Producto6 from "../image/4.webp";
import Producto7 from "../image/cajon-bandeja.webp";

function Productos() {
  return (
    <div className="galleryContainer">
      <div className="galleryItem">
        <img src={Producto5} alt="" className="galleryImg" />
        <h2 className="galleryTitle">CAJÓN TORITO</h2>
      </div>
      <div className="galleryItem">
        <img src={Producto6} alt="" className="galleryImg" />
        <h2 className="galleryTitle">CAJÓN JAULA</h2>
      </div>
      <div className="galleryItem">
        <img src={Producto7} alt="" className="galleryImg" />
        <h2 className="galleryTitle">CAJÓN BANDEJA</h2>
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
