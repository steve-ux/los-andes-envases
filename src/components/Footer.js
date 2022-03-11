import Logo from "../image/logo.png";
import Cellphone from "../image/cellphone.png";
import Email from "../image/email.png";
import Clock from "../image/clock.png";
import Facebook from "../image/facebook.png";
import { Link } from "react-router-dom";

function Footer() {
    return (
      <div className="footerContainer">
          <footer>
            
            <div className="containerIconosFooter">
              <div>
              <Link to="/"><img src={Logo} width="120" alt="Logo Los Andes" className="logoLosAndes"/></Link>
              </div>
              <div>
              <img src={Cellphone} width="50" alt="Cellphone" className="logoCellphone"/>
            <a href="tel:2615069690"><p>261 506-9690</p></a> 
              </div>
            <div>
            <img src={Email} width="70" alt="Correo electrónico" className="correoIcon"/>
            <a href="mailto:hello@grupopuebla.com"><p>hello@grupopuebla.com</p></a>
            </div>
            <div>
            <img src={Clock} width="60" alt="Horarios" className="logoReloj"/>
            <p>8:00 AM - 21:00 PM</p>
            </div>
            <a href="https://www.facebook.com/LosAndesAserradero" target="_blank"><img src={Facebook} width="60" alt="Logo Facebook" className="logoFb"/></a>
            </div>
            <div className="derechosReservados">
              Todos los derechos reservados © 2022
            </div>
          </footer>
      </div>
    );
  }
  
  export default Footer;