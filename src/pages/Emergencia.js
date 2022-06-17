import React from "react";
import Logo from "../components/Logo";
import CardEmergencia from "../components/Emergencia/CardEmergencia";
import ButtonsHome from "../components/Home/buttonsHome";
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
            <div className="divButtonsAreaPontos">
                {pText("outros")}
                {ButtonsHome("/emergencias","Emergencia","Números de Emergência","buttonHospital")}
                {ButtonsHome("/faq","Perguntas","Perguntas Frequentes","buttonFaq")}
            </div>
        </div>
    )
}

export default Emergencia;