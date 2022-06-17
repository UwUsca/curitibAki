import React from "react";
import { useNavigate } from "react-router";
import image from "./CssPages/logo-escuro.png"

function LogoPqno(){
    var navigate = useNavigate();
    function HandleClick(){
        navigate('/');
    }
    const divLogo = {
        width: "fit-content",
        height: "20%",
        textAlign: "center",
        maxHeight: "300px"
    }
    const imgLogo = {
        width: "90%",
        height: "90%",
        maxHeight: "35px",
        transition: "transform 0.1s ease-in-out",
        cursor: "pointer"
    }
return(
        <div id="logoIndex" style={divLogo}>
            <img src={image} alt="logo" style={imgLogo} onClick={HandleClick}/>
        </div>
)
}

export default LogoPqno;