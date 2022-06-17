import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faCircleInfo, faClock, faMap, faTicket } from '@fortawesome/free-solid-svg-icons'

function PontoConteudo(Local){
    const textSobre = {
        width: "95%",
        height: "fit-content",  
        fontFamily: "fontTextPontos",
        fontSize: "17px",
        color: "white"
    }
    const textBlock = {
        maxWidth: "100%",
        marginBottom: "10px",
        backgroundColor: "#ffffff0D",
        padding: "10px 20px 10px 20px",
        borderRadius: "15px",
    }

    switch(Local){
        case("museuoscarniemeyer"):
            return(
                <div className="textSobre" style={textSobre}>
                        <div style={textBlock}>
                            <h2><FontAwesomeIcon icon={faCircleInfo}/> SOBRE O MUSEU</h2>
                                <p>O Museu Oscar Niemeyer (MON), patrimônio estatal vinculado à Secretaria de Estado da Comunicação Social e da Cultura do Paraná, localizado em Curitiba (PR), abriga referenciais importantes da produção artística nacional e internacional, com mais de 9 mil obras nas áreas de artes visuais, arquitetura e design. É considerado o maior museu de arte da América Latina, com um espaço de cerca de 35 mil metros quadrados de área construída e mais de 17 mil metros quadrados de área para exposições.
                                    <br></br><br></br>
                                    Inaugurado em 22 de novembro de 2002, o projeto é de autoria do reconhecido arquiteto brasileiro que leva seu nome. Com um total de 12 salas expositivas, a cada ano são realizadas mais de 20 mostras, que juntas recebem um público superior a 360 mil visitantes.
                                    <br></br><br></br>
                                    Com uma equipe multidisciplinar, que visa aproximar e aperfeiçoar a experiência dos visitantes com as artes visuais, o MON possui os setores Educativo, Planejamento Cultural, Acervo e Conservação, Documentação e Referência, Gestão Museológica, Comunicação, Design, Jurídico e Eventos, além da área administrativa.
                                </p>
                        </div>
                        <div style={textBlock}>
                            <h2><FontAwesomeIcon icon={faClock}/> HORÁRIOS</h2>
                                <p>Terça a Domingo, das 10h às 17h30 (permanência até 18h)
                                    <br></br><br></br>
                                    Venda de ingressos e acesso às salas de exposição até 17h30
                                    <br></br><br></br>
                                    Acesso à exposição Da Vinci Experience até 17h30
                                </p>
                        </div>
                        <div style={textBlock}>
                            <h2><FontAwesomeIcon icon={faTicket}/> INGRESSOS</h2>
                                <p>R$ 30,00 (inteira)
                                    <br></br><br></br>
                                    R$ 15,00 (meia-entrada para professores e estudantes com identificação; doadores de sangue; pessoas com deficiência; titulares da ID Jovem; portadores de câncer com documento comprovatório)
                                </p>
                        </div> 
                        <div style={textBlock}>
                            <h2><FontAwesomeIcon icon={faMap}/> COMO CHEGAR</h2>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.842031586088!2d-49.26938724886844!3d-25.410097838251467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce41fa86f6915%3A0xf5f24c5f00323bee!2sMuseu%20Oscar%20Niemeyer!5e0!3m2!1spt-BR!2sbr!4v1650573682559!5m2!1spt-BR!2sbr"></iframe>
                            <p>Rua Marechal Hermes, 999 – Centro Cí́vico <br></br>
                                CEP 80530-230 – Curitiba/PR<br></br>
                                Fone: 55 41 3350-4400</p>
                        </div>
                    </div>
            )
        default:
            return("SEM INFOS DISPONIVEIS!")
    }
}
export default PontoConteudo;