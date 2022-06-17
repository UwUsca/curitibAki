import React, { useContext } from "react";
import '../components/CssPages/All.css';
import Logo from "../components/Logo";
import ButtonsHome from "../components/Home/buttonsHome";
import { AuthGoogleContext } from "../contexts/authGoogle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket} from "@fortawesome/free-solid-svg-icons"

function Home(){
    const {user, signOut} = useContext(AuthGoogleContext);
    let userLogado = JSON.parse(user);

    const textWelcome = {
        fontFamily: "fontTextPontos",
        color: "white",
        fontSize: "20px",
        textShadow: "1px 1px 2px black, 0 0 1em black, 0 0 0.2em black",
        display: "flex",
        gap: "5px",
        marginLeft: "20px"
    }
    const buttonExit = {
        borderRadius: "100%",
        border: "none",
        backgroundColor: "rgb(28,28,28,0.5)",
        color: "white",
        opacity: "75%"
    }
    return(
        <div className="divBackground" style={{marginTop: "5%"}}>
        <Logo/>
            <h1 style={textWelcome}>Bem vindo {userLogado.displayName} <button style={buttonExit} onClick={() => signOut()}><FontAwesomeIcon icon={faArrowRightFromBracket} /></button></h1>
            
            <div className="divButtonsArea">
                {ButtonsHome("/pontosturisticos","Curitiba","Pontos Turisticos","buttonPontos")}
                {ButtonsHome("/emergencias","Emergencia","Números de Emergência","buttonHospital")}
                {ButtonsHome("/faq","Perguntas","Perguntas Frequentes","buttonFaq")}
            </div>

        </div>
    )
}

export default Home;