import React from "react";
import Logo from "../components/Logo";
import pText from "../components/Pontos/pText";

function Pontos(){
    return(
        <div className="divBackground">
            <Logo/>
            <div className="divButtonsPages">
                <div className="divButtonPage" id="divPagePontos">Pontos Turisticos</div>
                <div className="divButtonPage" id="divPageRestaurantes">Restaurantes</div>
                <div className="divButtonPage" id="divPageEmergencia">Emergências</div>
                <div className="divButtonPage" id="divPageFAQ">Perguntas Frequentes</div>
            </div>
            <div className="divButtonsAreaPontos">
                {pText("AAA")}
            </div>
        </div>
    )
}

export default Pontos;