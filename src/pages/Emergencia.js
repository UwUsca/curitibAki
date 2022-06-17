import React from "react";
import Logo from "../components/Logo";
import CardEmergencia from "../components/Emergencia/CardEmergencia";
import pText from "../components/Pontos/pText";

function Emergencia(){
    return(
        <div className="divBackground" style={{marginTop:"1%"}}>
            <Logo/>
            <div className="divButtonsAreaPontos">
                {pText("saúde")}
                {CardEmergencia("Samu")}
                {CardEmergencia("Bombeiros")}
                {CardEmergencia("DefCivil")}
                {pText("Segurança")}
                {CardEmergencia("PolCivil")}
                {CardEmergencia("PolMilitar")}
                {CardEmergencia("PolRodoviaria")}
            </div>
        </div>
    )
}

export default Emergencia;