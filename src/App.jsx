import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard, NotFound } from './pages';
import Menu from './components/Menu'
function App() {
  
  return (
    <BrowserRouter>
    <Menu /> 
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} /> 
    </Routes>
    </BrowserRouter>
  )
}

export default App
