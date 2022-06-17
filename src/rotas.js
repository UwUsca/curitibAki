import React from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from "./components/Home/Home";

function Rotas(){
    return <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
    </Router>
}

export default Rotas;