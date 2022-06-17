import React from "react";
import '../components/CssPages/All.css';
import Logo from "../components/Logo";
import ButtonsHome from "../components/Home/buttonsHome";

function Home(){
    return(
        <div className="divBackground" style={{marginTop: "5%"}}>
        <Logo/>
            <div className="divButtonsArea">
                {ButtonsHome("/pontosturisticos","Curitiba","Pontos Turisticos","buttonPontos")}
                {ButtonsHome("/emergencias","Emergencia","Números de Emergência","buttonHospital")}
                {ButtonsHome("/faq","Perguntas","Perguntas Frequentes","buttonFaq")}
            </div>

        </div>
    )
}

export default Home;