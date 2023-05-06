import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard, NotFound, Unidades } from './pages';
import Geracoes from "./pages/geracoes/Geracoes";

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} /> 
      <Route path="/unidades" element={<Unidades />} />
      <Route path="/cadastro" element={<Geracoes />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
