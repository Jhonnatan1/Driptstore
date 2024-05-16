import LoginPage from "./Pages/Login"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Produtos from "./Pages/Produtos";
import Detalhesprodutos from "./Pages/Detalhesprodutos";
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="Produtos" element={<Produtos />} /> 
          <Route path="Detalhesprodutos" element={<Detalhesprodutos />} /> 
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
