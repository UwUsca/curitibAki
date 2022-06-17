import React from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from "./pages/Home";
import Pontos from "./pages/Pontos";
import Emergencia from "./pages/Emergencia";
import Faq from "./pages/Faq";
import Oscar from "./components/Pontos/Pages/museuoscarniemeyer";

function Rotas(){
    return <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/pontosturisticos" element={<Pontos/>}/>
            <Route path="/emergencias" element={<Emergencia/>}/>
            <Route path="/faq" element={<Faq/>}/>
            <Route path="/pontosturisticos/museuoscarniemeyer" element={<Oscar/>}/>
            <Route path="*" element={<Home/>}/>
        </Routes>
    </Router>
}

export default Rotas;