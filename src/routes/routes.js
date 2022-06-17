import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "../pages/Home";
import Pontos from "../pages/Pontos";
import Emergencia from "../pages/Emergencia";
import Faq from "../pages/Faq";
import Ponto from "../components/Pontos/Pages/Ponto";
import { Login } from "../pages/Login";
import { PrivateRoutes } from ".";
import { Fragment } from "react";

function Rotas() {
    return (
        <Router>
            <Fragment>
                <Routes>
                    <Route path="/" element={<Login />} />

                    <Route path="/home" element={<PrivateRoutes />}>
                        <Route path="/home" element={<Home />} />
                    </Route>

                    <Route path="/pontosturisticos" element={<PrivateRoutes />}>
                        <Route path="/pontosturisticos" element={<Pontos />} />
                    </Route>

                    <Route path="/pontosturisticos/museuoscarniemeyer" element={<PrivateRoutes />}>
                        <Route path="/pontosturisticos/museuoscarniemeyer" element={Ponto("museuoscarniemeyer")} />
                    </Route>

                    <Route path="/pontosturisticos/operadearame" element={<PrivateRoutes />}>
                        <Route path="/pontosturisticos/operadearame" element={Ponto("operadearame")} />
                    </Route>

                    <Route path="/pontosturisticos/jardimbotanico" element={<PrivateRoutes />}>
                        <Route path="/pontosturisticos/jardimbotanico" element={Ponto("jardimbotanico")} />
                    </Route>

                    <Route path="/pontosturisticos/ruaxvdesetembro" element={<PrivateRoutes />}>
                        <Route path="/pontosturisticos/ruaxvdesetembro" element={Ponto("ruaxvdesetembro")} />
                    </Route>

                    <Route path="/pontosturisticos/mercadomunicipal" element={<PrivateRoutes />}>
                        <Route path="/pontosturisticos/mercadomunicipal" element={Ponto("mercadomunicipal")} />
                    </Route>

                    <Route path="/pontosturisticos/passeiopublico" element={<PrivateRoutes />}>
                        <Route path="/pontosturisticos/passeiopublico" element={Ponto("passeiopublico")} />
                    </Route>

                    <Route path="/pontosturisticos/memorialdecuritiba" element={<PrivateRoutes />}>
                        <Route path="/pontosturisticos/memorialdecuritiba" element={Ponto("memorialdecuritiba")} />
                    </Route>

                    <Route path="/pontosturisticos/centrohistorico" element={<PrivateRoutes />}>
                        <Route path="/pontosturisticos/centrohistorico" element={Ponto("centrohistorico")} />
                    </Route>

                    <Route path="/pontosturisticos/parquesaolourenco" element={<PrivateRoutes />}>
                        <Route path="/pontosturisticos/parquesaolourenco" element={Ponto("parquesaolourenco")} />
                    </Route>

                    <Route path="/pontosturisticos/parquebarigui" element={<PrivateRoutes />}>
                        <Route path="/pontosturisticos/parquebarigui" element={Ponto("parquebarigui")} />
                    </Route>

                    <Route path="/pontosturisticos/parquetingui" element={<PrivateRoutes />}>
                        <Route path="/pontosturisticos/parquetingui" element={Ponto("parquetingui")} />
                    </Route>

                    <Route path="/pontosturisticos/bosquealemao" element={<PrivateRoutes />}>
                        <Route path="/pontosturisticos/bosquealemao" element={Ponto("bosquealemao")} />
                    </Route>

                    <Route path="/pontosturisticos/bosquepapajoaopauloii" element={<PrivateRoutes />}>
                        <Route path="/pontosturisticos/bosquepapajoaopauloii" element={Ponto("bosquepapajoaopauloii")} />
                    </Route>

                    <Route path="/pontosturisticos/shoppingpalladium" element={<PrivateRoutes />}>
                        <Route path="/pontosturisticos/shoppingpalladium" element={Ponto("shoppingpalladium")} />
                    </Route>

                    <Route path="/pontosturisticos/shoppingcuritiba" element={<PrivateRoutes />}>
                        <Route path="/pontosturisticos/shoppingcuritiba" element={Ponto("shoppingcuritiba")} />
                    </Route>

                    <Route path="/pontosturisticos/shoppingestacao" element={<PrivateRoutes />}>
                        <Route path="/pontosturisticos/shoppingestacao" element={Ponto("shoppingestacao")} />
                    </Route>

                    <Route path="/pontosturisticos/shoppingpark" element={<PrivateRoutes />}>
                        <Route path="/pontosturisticos/shoppingpark" element={Ponto("shoppingpark")} />
                    </Route>

                    <Route path="/pontosturisticos/shoppingjockey" element={<PrivateRoutes />}>
                        <Route path="/pontosturisticos/shoppingjockey" element={Ponto("shoppingjockey")} />
                    </Route>

                    <Route path="/pontosturisticos/shoppingbatel" element={<PrivateRoutes />}>
                        <Route path="/pontosturisticos/shoppingbatel" element={Ponto("shoppingbatel")} />
                    </Route>      
                                        
                    <Route path="/emergencias" element={<Emergencia />} />
                    <Route path="/faq" element={<Faq />} />
                    <Route path="*" element={<Home />} />
                    
                </Routes>
            </Fragment>
        </Router>
    )
}

export default Rotas;