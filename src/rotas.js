import React from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from "./components/Home/Home";
import Pontos from "./components/Pontos/Pontos";
import Emergencia from "./components/Emergencia/Emergencia";
import Faq from "./components/Faq/Faq";

function Rotas(){
    return <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/pontosturisticos" element={<Pontos/>}/>
            <Route path="/emergencias" element={<Emergencia/>}/>
            <Route path="/faq" element={<Faq/>}/>
        </Routes>
    </Router>
}

export default Rotas;