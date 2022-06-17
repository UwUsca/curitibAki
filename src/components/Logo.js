import React from "react";
import image from "./CssPages/logo-escuro.png"

function Logo(){
    const divLogo = {
        width: "fit-content",
        height: "auto",
        textAlign: "center",
        maxHeight: "18.75em"
    }
    const imgLogo = {
        width: "auto",
        height: "auto",
        maxHeight: "9.5em",
        maxWidth: "35.9375em",
        transition: "transform 0.1s ease-in-out",
        cursor: "pointer"
    }
return(
    <a href="/">
        <div id="logoIndex" style={divLogo}><img src={image} alt="logo" style={imgLogo}/></div>
    </a>
)
}

export default Logo;