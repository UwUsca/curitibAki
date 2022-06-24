import React from "react";
import Curitiba from "../CssPages/Images/curitiba1.png"
import Emergencia from "../CssPages/Images/hospital.jpg"
import Perguntas from "../CssPages/Images/faq.jpg"
import { useNavigate } from "react-router-dom";

function ButtonsHome(page,imagem,texto,idnome){

    let navigate = useNavigate();
    function trocaPag(){
        navigate(page)
    }
    
    switch(imagem){
        case("Curitiba"): imagem = Curitiba; break;
        case("Emergencia"): imagem = Emergencia; break;
        case("Perguntas"): imagem = Perguntas; break;
    }
    const buttonsCss = {
        height: "60%",
        width: "40%",
        minWidth: "370px",
        maxWidth: "750px",
        minHeight:"220px",
        maxHeight:"220px",
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
        width: "125%",
        height: "100%",
        objectFit: "cover",
        borderRadius: "10px",
        opacity: "80%",
        transition: "opacity 0.1s ease-in-out, transform 0.1s ease-in-out"
    }
    const buttonsText = {
        color: "white",
        fontSize: "57px",
        position: "absolute",
        textAlign: "center",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        fontFamily: "fontCards",
        textShadow: "1px 1px 2px black, 0 0 1em black, 0 0 0.2em black"
    }
return(
    <div className="divButtons" id={idnome} style={buttonsCss} onClick={trocaPag}>
        <img src={imagem} alt="imgButton" style={buttonsImg}/>
        <div style={buttonsText}>{texto}</div>
    </div>
)
}

export default ButtonsHome;