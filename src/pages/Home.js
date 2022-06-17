import React, { useContext } from "react";
import '../components/CssPages/All.css';
import Logo from "../components/Logo";
import ButtonsHome from "../components/Home/buttonsHome";
import { AuthGoogleContext } from "../contexts/authGoogle";

function Home(){
    const {user, signOut} = useContext(AuthGoogleContext);
    let userLogado = JSON.parse(user);

    //Testo bem vindo abaixo
    return(
        <div className="divBackground" style={{marginTop: "5%"}}>
        <Logo/>
            <h1>Bem vindo {userLogado.displayName}</h1>
            <button onClick={() => signOut()}>Sair</button>
            <div className="divButtonsArea">
                {ButtonsHome("/pontosturisticos","Curitiba","Pontos Turisticos","buttonPontos")}
                {ButtonsHome("/emergencias","Emergencia","Números de Emergência","buttonHospital")}
                {ButtonsHome("/faq","Perguntas","Perguntas Frequentes","buttonFaq")}
            </div>

        </div>
    )
}

export default Home;