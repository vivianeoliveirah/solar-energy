import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard, NotFound } from './pages';

function App() {
  
  return (
    <BrowserRouter> 
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} /> 
    </Routes>
    </BrowserRouter>
  )
}

export default App
