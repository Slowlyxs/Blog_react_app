import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Productos from './pages/Productos';
import Contacto from './pages/Contacto';
import IndexuseContext from './useEffect';
import FormularioBasico from './formulario/FormularioBasico';
import FormularioRHF from './formulario/FormularioRHF';
import FormularioZod from './formulario/FormularioZod';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/useEffect/IndexuseContext" element={<IndexuseContext />} />
      <Route path="/formulario/FormularioBasico" element={<FormularioBasico />} />
      <Route path="/formulario/FormularioRHF" element={<FormularioRHF />} />
      <Route path="/formulario/FormularioZod" element={<FormularioZod/>} />
    </Routes>
  );
}
