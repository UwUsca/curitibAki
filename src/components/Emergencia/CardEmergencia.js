import React from "react";
import Samu from "../CssPages/Images/emergencia/samu.png"
import Bombeiros from "../CssPages/Images/emergencia/bombeiros.png"
import DefCivil from "../CssPages/Images/emergencia/defesa-civil.png"
import PolCivil from "../CssPages/Images/emergencia/policia-civil.png"
import PolMilitar from "../CssPages/Images/emergencia/policia-militar.png"
import PolRodoviaria from "../CssPages/Images/emergencia/policia-rodoviaria.png"

function CardEmergencia(nome){
    const cardBackground = {
        height: "60%",
        width: "40%",
        minWidth: "370px",
        maxWidth: "400px",
        minHeight:"220px",
        maxHeight:"220px",
        backgroundImage: "linear-gradient(135deg, #ffffff1d 50%, #ffffff0d 50%)",
        borderRadius: "10px",
        float: "left",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        flexDirection:"row",
        margin: "10px",
    }
    const cardImgHolder = {
        width:"40%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
    const cardImage = {
        width: "100%",
        maxHeight:"180px",
        borderRadius: "10px",
        opacity: "90%",
        borderRadius: "10px",
        overflow: "hidden",
    }
    const cardTextHolder = {
        width:"200px", 
        height: "180px",
        display: "flex",
        flexFlow: "column wrap",
        justifyContent: "center",
        alignContent: "space-around",
        textAlign: "center",
        marginLeft: "10px"
    }
    const cardTextH2 = {
        margin:"0px",
        fontSize: "33px",
        textAlign: "center",
        fontFamily:"fontCards",
        color: "white",
        textShadow: "1px 1px 2px black, 0 0 1em black, 0 0 0.2em black"
    }
    const cardTextP = { 
        margin: "0px",
        marginTop:"40px",
        fontSize: "30px",
        textAlign: "center",
        fontFamily:"fontCards",
        color: "white",
        textShadow: "1px 1px 2px black, 0 0 0.1em black, 0 0 0.1em black"
    }
    var cardImg; var cardName; var cardNumber; var cardAdvice;
    switch(nome){
        case("Samu"):
            cardImg = Samu; cardName = "Samu"; cardNumber = "192"; cardAdvice = "Cuidar";
            break;
        case("Bombeiros"):
            cardImg = Bombeiros; cardName = "Bombeiros"; cardNumber = "193"; cardAdvice = "Salvar";
            break;
        case("DefCivil"):
            cardImg = DefCivil; cardName = "Defesa Civil"; cardNumber = "199"; cardAdvice = "Articular";
            break;
        case("PolCivil"):
            cardImg = PolCivil; cardName = "Polícia Civil"; cardNumber = "197"; cardAdvice = "Apurar";
            break;
        case("PolMilitar"):
            cardImg = PolMilitar; cardName = "Polícia Militar"; cardNumber = "190"; cardAdvice = "Proteger";
            break;
        case("PolRodoviaria"):
            cardImg = PolRodoviaria; cardName = "Polícia Rodoviaria"; cardNumber = "191"; cardAdvice = "Orientar";
            break;
    }
    return(
        <div style={cardBackground}>
            <div style={cardImgHolder}>
                <img src={cardImg} alt="cardImage" style={cardImage}/>
            </div>
            <div style={cardTextHolder}>
                <h2 style={cardTextH2}>{cardName}</h2>
                <p style={cardTextP}>
                    {cardNumber}
                <br/>
                    <b style={{color: "#f55e53"}}>{cardAdvice}</b>
                </p>
            </div>
        </div>
    )
}

export default CardEmergencia;