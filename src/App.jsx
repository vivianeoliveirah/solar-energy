import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import { Dashboard, NotFound, Unidades } from './pages';

=======
import { Dashboard, NotFound } from './pages';
import Menu from './components/Menu'
>>>>>>> 7417ce9c9c28fa871fe907bb43f5b2053f04181b
function App() {
  
  return (
    <BrowserRouter>
    <Menu /> 
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
