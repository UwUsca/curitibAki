import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"

function ChangeTheme(){
    const buttonChangeTheme  = {
        display: "block",
        position: 'fixed',
        bottom:10,
        right:10,
        backgroundColor: "rgba(0,0,0,0.3)",
        border: "none",
        fontSize: "50px",
        boxShadow: "0px 0px 4px 1px",
        borderRadius: "50%"
    }
    const LightThemeBG = "background-color: #f2f3f4 !important;" 
    + "transition: background-color 0.2s ease-in-out;"
    const DarkThemeBG = "background-color: #131313 !important;" 
    + "transition: background-color 0.2s ease-in-out;";
    var icone = <FontAwesomeIcon icon={faSun} />;

    function changeColors(){
        var htmlTag = document.documentElement;

        if(localStorage.getItem("theme") === "dark"){ // Troca pro claro
            localStorage.setItem("theme", "light")
        } else if (localStorage.getItem("theme") === "light"){ // Troca pro escuro
            localStorage.setItem("theme", "dark")
        }
        getTheme()
    }
    function getTheme(){


        setTimeout(function(){ //Mini atualização

            if (localStorage.getItem("theme") === null){
                localStorage.setItem("theme", "dark");
            } else {
                if(localStorage.getItem("theme") === "dark"){
                    document.getElementById("iconSun").style.visibility = "hidden"
                    document.getElementById("iconMoon").style.visibility = "visible"
                    document.documentElement.style = DarkThemeBG;

                } else if (localStorage.getItem("theme") === "light"){
                    document.getElementById("iconSun").style.visibility = "visible"
                    document.getElementById("iconMoon").style.visibility = "hidden"
                    document.documentElement.style = LightThemeBG; //fundo
                }
            }

        }, 1)
    }

    getTheme();
    return(
            <button id="buttonTheme" style={buttonChangeTheme} onClick={changeColors}>
                <FontAwesomeIcon id="iconSun" icon={faSun}/>
                <FontAwesomeIcon id="iconMoon" icon={faMoon}/>
            </button>
    )
}

export default ChangeTheme;