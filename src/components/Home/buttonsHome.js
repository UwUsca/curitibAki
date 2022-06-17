import React from "react";
import Curitiba from "../CssPages/Images/curitiba1.png"
import Emergencia from "../CssPages/Images/hospital.jpg"
import Perguntas from "../CssPages/Images/faq.jpg"

function buttonsHome(page,imagem,texto,idnome){
    switch(imagem){
        case("Curitiba"): imagem = Curitiba; break;
        case("Emergencia"): imagem = Emergencia; break;
        case("Perguntas"): imagem = Perguntas; break;
    }
    const buttonsCss = {
        height: "13.75em",
        width: "47em",
        backgroundImage: "linear-gradient(45deg, #2663E5 50%, #2B26C1 50%)",
        /*Modo escuro: 2663E5 2B26C1 | Modo Claro: 24e463 2cc424*/
        borderRadius: "10px",
        float: "left",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        alignItems: "center",
        margin: "10px",
        cursor: "pointer",
        overflow: "hidden"
    }
    const buttonsImg = {
        width: "46em",
        height: "13.75em",
        objectFit: "cover",
        borderRadius: "10px",
        opacity: "80%",
        transition: "opacity 0.1s ease-in-out, transform 0.1s ease-in-out"
    }
    const buttonsText = {
        color: "white",
        fontSize: "70px",
        position: "absolute",
        textAlign: "center",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        fontFamily: "fontCards",
        textShadow: "1px 1px 2px black, 0 0 1em black, 0 0 0.2em black"
    }
return(
    <a href={page}>
    <div className="divButtons" id={idnome} style={buttonsCss}>
        <img src={imagem} alt="imgButton" style={buttonsImg}/>
        <div style={buttonsText}>{texto}</div>
    </div>
    </a>
)
}

export default buttonsHome;