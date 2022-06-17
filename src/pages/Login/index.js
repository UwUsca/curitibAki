import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthGoogleContext } from "../../contexts/authGoogle";
import Logo from "../../components/Logo";
import pText from "../../components/Pontos/pText";
import ButtonsHome from "../../components/Home/buttonsHome";
import "../../components/CssPages/All.css"
import IconeGoogle from "../../components/CssPages/Images/googleIcon.png"

export const Login = () => {
    const { signInGoogle, signed } = useContext(AuthGoogleContext)
    async function loginGoogle(){
        await signInGoogle();
    }

const loginCss = {
  marginTop: "15px",
  marginBottom: "15px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontFamily: "fontTextPontos",
  fontSize: "17px",
  color: "white",
  textAlign: "center",
  textShadow: "1px 1px 2px black, 0 0 1em black, 0 0 0.2em black"
}
const buttonLogin = {
  width: "120%",
  height: "50px",
  fontSize: "17px",
  border: "none",
  borderRadius: "10px",
  backgroundColor: "rgb(28,28,28,0.5)",
  fontFamily: "fontTextPontos",
  display: "flex",
  justifyContent: "center", 
  alignItems: "center",
  gap:"20px",
  color: "white"
}

    if (!signed) {
        // Front página login
        return (
          <div className="divBackground" style={{marginTop: "5%"}}>
            <Logo/>
            <div style={loginCss}>
              {pText("bem vindo!")}
              <h4>Faça login para continuar</h4>
              <button style={buttonLogin} onClick={loginGoogle}>
                 <img src={IconeGoogle} style={{height:"35px"}}/>
                 Logar com o Google
              </button>
            </div>
            <div className="divButtonsAreaPontos">
                {pText("Veja também")}
                {ButtonsHome("/emergencias","Emergencia","Números de Emergência","buttonHospital")}
                {ButtonsHome("/faq","Perguntas","Perguntas Frequentes","buttonFaq")}
            </div>
          </div>
        )
      } else {
        return <Navigate to="/Home" />;
      }

    
};

