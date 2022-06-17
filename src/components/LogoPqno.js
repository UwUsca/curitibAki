import React from "react";
import { useNavigate } from "react-router";
import image from "./CssPages/logo-escuro.png"

function LogoPqno(){
    var navigate = useNavigate();
    function HandleClick(){
        navigate('/');
    }
    const divLogo = {
        width: "100%",
        height: "20%",
        textAlign: "center",
        maxHeight: "300px",
        boxShadow: "inset 0px 0px 100px rgba(0,0,0, 0.3), 0px 0px 10px rgba(0,0,0, 0.3)"
    }
    const imgLogo = {
        width: "90%",
        height: "90%",
        maxWidth: "120px",
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