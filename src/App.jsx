import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard, NotFound, Unidades } from './pages';

function App() {
  
  return (
    <BrowserRouter> 
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} /> 
      <Route path="/unidades" element={<Unidades />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
