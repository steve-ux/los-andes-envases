import NavBar from "../components/Navigator/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Enviado() {
  return (
    <>
      <NavBar />
      <br/>
      <div>
        <h3 className="titleEnviado">
          ¡Tu mensaje fue enviado! A la brevedad vas a ser contactado por
          nuestros representantes.
        </h3>
        <div className="contenedorBtn">
          <Link to="/">
            <button className="btnEnviado">Volver a Inicio</button>
          </Link>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Enviado;
