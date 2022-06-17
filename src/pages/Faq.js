import React from "react";
import Logo from "../components/Logo";
import LogoText from "../components/CssPages/iconE.png"
import pText from "../components/Pontos/pText";
import ButtonsHome from "../components/Home/buttonsHome";
import "../components/CssPages/All.css"

function Faq(){
    const style1 = {
        maxWidth:"40px",
        transform: "rotate(270deg)",
        marginRight:"10px",
        marginBottom:"-10px"
    }
    return(
        <div className="divBackground">
            <Logo/>
            <div className="divButtonsAreaPontos">
                <div className="areaPerguntas">
                <div className="pergunta">
                        <h2><img className="pIcon" src={LogoText} alt="logotxt" style={style1}/>
                        ONDE COMPRAR INGRESSOS PARA A LINHA DE TURISMO?</h2>
                        </div>
                    <div className="resposta">
                    R: As cartelas podem ser adquiridas diretamente nos ônibus (há um cobrador na parte inferior) ou em qualquer ponto de embarque. Também é vendido na Rodoferroviária das 12h30 às 18h30 em dias úteis. O preço é de R$50 (2021). A forma de pagamento da cartela da Linha Turismo é somente em dinheiro.
                    </div>
                    <div className="pergunta">
                        <h2><img className="pIcon" src={LogoText} alt="logotxt" style={style1}/>
                        POR QUE TENHO QUE LOGAR PARA VER OS PONTOS TURÍSTICOS?</h2>
                        </div>
                    <div className="resposta">
                    R: Por ser um trabalho de faculdade, precisamos coletar alguns dados para nossa base de dados. Não se preocupe, suas informações pessoais estão seguras!
                    </div>
                    <div className="pergunta">
                        <h2><img className="pIcon" src={LogoText} alt="logotxt" style={style1}/>
                        ONDE POSSO ENTRAR EM CONTATO COM OS DONOS DO SITE?</h2>
                        </div>
                    <div className="resposta">
                    R: Para nos contactar, basta enviar um email para: email@dominio.com
                    </div>
                </div>
            </div>
            <div className="divButtonsAreaPontos">
                {pText("Outros")}
                {ButtonsHome("/emergencias","Emergencia","Números de Emergência","buttonHospital")}
                {ButtonsHome("/faq","Perguntas","Perguntas Frequentes","buttonFaq")}
            </div>
        </div>
    )
}

export default Faq;