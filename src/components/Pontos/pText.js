import React from "react";
import LogoText from "../CssPages/iconE.png"

function pText(texto){
    const style1 = {
        height: "50px",
        transform: "rotate(270deg)"
    }
    const style2 = {
        height: "50px",
        transform: "rotate(90deg)"
    }
    return(
    <p className="pText">
        <img className="pIcon" src={LogoText} alt="logotxt" style={style1}/>
        {texto}
        <img className="pIcon" src={LogoText} alt="logotxt" style={style2}/>
    </p>
    )
}

export default pText;