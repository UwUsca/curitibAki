import React from "react";
import '../CssPages/Home.css';
import Logo from '../CssPages/logo-escuro.png'
import ImgCuritiba from "../CssPages/Images/curitiba1.png"
import ImgEmergencia from "../CssPages/Images/hospital.jpg"
import ImgFaq from "../CssPages/Images/faq.jpg"

function Home(){
    return(
        <div className="divBackground">
        <div id="logoIndex"><img src={Logo} alt="logo"/></div>
            <div className="divButtonsArea">
                <a href="/pontosturisticos">
                    <div className="divButtons" id="buttonPontos">
                        <img src={ImgCuritiba} alt="imgCuritiba"/>
                        <div className="divText">Pontos Turisticos</div>
                    </div>
                </a>
                <a href="/emergencias">
                    <div className="divButtons" id="buttonEmergencias">
                        <img src={ImgEmergencia} alt="imgEmergencia" id="buttonHospital"/>
                        <div className="divText">Emergências</div>
                    </div>
                </a>
                <a href="/faq">
                    <div className="divButtons" id="buttonFaq">
                        <img src={ImgFaq} alt="imgFaq"/>
                        <div className="divText">Perguntas Frequentes</div>
                    </div>
                </a>
            </div>

        </div>
    )
}

export default Home;