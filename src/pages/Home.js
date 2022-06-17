import React from "react";
import '../components/CssPages/All.css';
import Logo from "../components/Logo";
import buttonsHome from "../components/Home/buttonsHome";

function Home(){
    return(
        <div className="divBackground">
        <Logo/>
            <div className="divButtonsArea">
                {buttonsHome("/pontosturisticos","Curitiba","Pontos Turisticos","buttonPontos")}
                {buttonsHome("/emergencias","Emergencia","Números de Emergência","buttonHospital")}
                {buttonsHome("/faq","Perguntas","Perguntas Frequentes","buttonFaq")}
            </div>

        </div>
    )
}

export default Home;