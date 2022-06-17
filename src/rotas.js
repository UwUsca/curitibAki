import React from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from "./pages/Home";
import Pontos from "./pages/Pontos";
import Emergencia from "./pages/Emergencia";
import Faq from "./pages/Faq";
import Ponto from "./components/Pontos/Pages/Ponto";

function Rotas(){
    return <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/pontosturisticos" element={<Pontos/>}/>
            <Route path="/emergencias" element={<Emergencia/>}/>
            <Route path="/faq" element={<Faq/>}/>
            <Route path="*" element={<Home/>}/>
            <Route path="/pontosturisticos/museuoscarniemeyer" element={Ponto("museuoscarniemeyer")}/>
            <Route path="/pontosturisticos/operadearame" element={Ponto("operadearame")}/>
            <Route path="/pontosturisticos/jardimbotanico" element={Ponto("jardimbotanico")}/>
            <Route path="/pontosturisticos/ruaxvdesetembro" element={Ponto("ruaxvdesetembro")}/>
            <Route path="/pontosturisticos/mercadomunicipal" element={Ponto("mercadomunicipal")}/>
            <Route path="/pontosturisticos/passeiopublico" element={Ponto("passeiopublico")}/>
            <Route path="/pontosturisticos/memorialdecuritiba" element={Ponto("memorialdecuritiba")}/>
            <Route path="/pontosturisticos/centrohistorico" element={Ponto("centrohistorico")}/>
            <Route path="/pontosturisticos/parquesaolourenco" element={Ponto("parquesaolourenco")}/>
            <Route path="/pontosturisticos/parquebarigui" element={Ponto("parquebarigui")}/>
            <Route path="/pontosturisticos/parquetingui" element={Ponto("parquetingui")}/>
            <Route path="/pontosturisticos/bosquealemao" element={Ponto("bosquealemao")}/>
            <Route path="/pontosturisticos/bosquepapajoaopauloii" element={Ponto("bosquepapajoaopauloii")}/>
            <Route path="/pontosturisticos/shoppingpalladium" element={Ponto("shoppingpalladium")}/>
            <Route path="/pontosturisticos/shoppingcuritiba" element={Ponto("shoppingcuritiba")}/>
            <Route path="/pontosturisticos/shoppingestacao" element={Ponto("shoppingestacao")}/>
            <Route path="/pontosturisticos/shoppingpark" element={Ponto("shoppingpark")}/>
            <Route path="/pontosturisticos/shoppingjockey" element={Ponto("shoppingjockey")}/>
            <Route path="/pontosturisticos/shoppingbatel" element={Ponto("shoppingbatel")}/>
        </Routes>
    </Router>
}

export default Rotas;