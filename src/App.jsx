import { Routes, Route } from "react-router-dom";
import { Dashboard, NotFound, Unidades } from "./pages";
import Geracoes from "./pages/Geracoes/Geracoes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/unidades" element={<Unidades />} />
      <Route path="/cadastro" element={<Geracoes />} />
    </Routes>
  );
}

export default App;
