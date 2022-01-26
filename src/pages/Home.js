import { Link } from "react-router-dom";
// import SobreNosotros from "./SobreNosotros";
// import Contacto from "./Contacto";

function Home() {
  return (
    
      <div>
        <h1>Esta es la home</h1>
        <Link to="/SobreNosotros"><h2>Ver Sobre Nosotros.</h2></Link>
        <Link to="/Contacto"><h2>Ver Contacto.</h2></Link>
      </div>
  );
}

export default Home;