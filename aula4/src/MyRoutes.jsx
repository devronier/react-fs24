import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Contatos from "./pages/Contatos"
import Sobre from "./pages/Sobre"

function MyRoutes() {
  return (
    <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/contatos' element={<Contatos/>}/>
        <Route path='/sobre' element={<Sobre/>}/>

        <Route path="*" element={<h1>Não encontrado</h1>}/>
    </Routes>
);
}

export default MyRoutes;