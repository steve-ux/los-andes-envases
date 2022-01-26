import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SobreNosotros from "./pages/SobreNosotros";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SobreNosotros" element={<SobreNosotros />} />
        <Route path="/Contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
