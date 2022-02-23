import { Link } from "react-router-dom";


function Home() {
  return (
    <div>
      <h1 className="titleHome">Los Andes - Evases</h1>
      <h2>Esta es la home</h2>
      <Link to="/SobreNosotros">
        <h2>Ver Sobre Nosotros.</h2>
      </Link>
      <Link to="/Contacto">
        <h2>Ver Contacto.</h2>
      </Link>
    </div>
  );
}

export default Home;
