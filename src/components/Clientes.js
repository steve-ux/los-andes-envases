import Cliente1 from "../image/_NPH4856.jpg";
import Cliente2 from "../image/_NPH4421.jpg";
import Cliente3 from "../image/_NPH4654.jpg";

function Clientes() {
  return (
    <div className="clientesContainer">
      <div className="clienteItem">
        <img src={Cliente1} alt="" className="clienteImg" />
        <a href="https://goo.gl/maps/tFrqGd5DqJF58ai86" target="blank_"><h2 className="clienteTitle">Ángel Gonzalez</h2></a>
        <h4 className="clienteOpinion">"Excelente fábrica de Envases de Madera. Muy buena atención."</h4>
      </div>
      <div className="clienteItem">
        <img src={Cliente2} alt="" className="clienteImg" />
        <a href="https://goo.gl/maps/tNtxcEh4e3S6dKVG6" target="blank_"><h2 className="clienteTitle">Nicolas Campeglia</h2></a>
        <h4 className="clienteOpinion">"Muy buena atención al público."</h4>
      </div>
      <div className="clienteItem">
        <img src={Cliente3} alt="" className="clienteImg" />
        <a href="https://goo.gl/maps/g1yQRoSmCUz7Dir88" target="blank_"><h2 className="clienteTitle">Federico Moi</h2></a>
        <h4 className="clienteOpinion">"Los mejores cajones de maderas para todo tipo de frutas y verduras hechos con la mayor calidad del mercado."</h4>
      </div>
    </div>
  );
}

export default Clientes;