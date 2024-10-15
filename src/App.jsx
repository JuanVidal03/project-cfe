import { BrowserRouter, Routes, Route } from "react-router-dom"
import Landing from "./landing/Index"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="*" element={<h1>Ruta no existe</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
