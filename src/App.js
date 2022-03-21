import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SobreNosotros from "./pages/SobreNosotros";
import Contacto from "./pages/Contacto";
import Enviado from "./pages/Enviado";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SobreNosotros" element={<SobreNosotros />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/Enviado" element={<Enviado />} />
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
