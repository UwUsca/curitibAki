import React from "react";
import LogoPqno from "../../LogoPqno";
import PontoConteudo from "./PontoTexto";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as estrelaCheia} from "@fortawesome/free-solid-svg-icons"
import { faStar as estrelaVazia} from "@fortawesome/free-regular-svg-icons"

import BosqueAlemao from "../../CssPages/Images/pontos/bosque-alemao.jpg"
import BosquePapa from "../../CssPages/Images/pontos/bosque-papa.jpg"
import CentroHistorico from "../../CssPages/Images/pontos/centro-historico.jpg"
import JardimBotanico from "../../CssPages/Images/pontos/jardim-botanico.jpg"
import Memorial from "../../CssPages/Images/pontos/memorial.jpg"
import MercadoMunicipal from "../../CssPages/Images/pontos/mercado-municipal-de-curitiba.jpg"
import OperaArame from "../../CssPages/Images/pontos/opera-de-arame.jpg"
import Oscar from "../../CssPages/Images/pontos/oscar.jpg"
import ParqueBarigui from "../../CssPages/Images/pontos/parque-barigui.jpg"
import ParqueLourenco from "../../CssPages/Images/pontos/parque-sao-lourenco.jpg"
import ParqueTingui from "../../CssPages/Images/pontos/parque-tingui.jpg"
import PasseioPublico from "../../CssPages/Images/pontos/passeio-publico.jpg"
import RuaXV from "../../CssPages/Images/pontos/rua-xv.jpg"
import ShopBarigui from "../../CssPages/Images/pontos/shop-barigui.jpg"
import ShopBatel from "../../CssPages/Images/pontos/shop-batel.jpg"
import ShopCuritiba from "../../CssPages/Images/pontos/shop-curitiba.jpeg"
import ShopEstacao from "../../CssPages/Images/pontos/shop-estacao.jpg"
import ShopJockey from "../../CssPages/Images/pontos/shop-jockey.jpg"
import ShopPalladium from "../../CssPages/Images/pontos/shop-palladium.jpg"


function Ponto(page){

    var Imagem; var NomeLugar; var Local;

    const divPageImage = {
        width: "100%",
        borderTop: "5px solid #2B26C1",
        maxHeight: "fit-content",
        marginTop: "1%"
    }
    const imgPageImage = {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        maxHeight: "250px",
    }
    const pontoName = {
        textAlign: "center",
        fontSize: "42px",
        fontFamily: "fontCards",
        textShadow: "#000 5px 0 10px",
        backgroundImage: "linear-gradient(45deg, #2663E5 50%, #2B26C1 50%)",
        borderRadius: "0 0 15px 15px",
        padding: "20",
        color:"white",
        marginTop: "-4px" 
    }
    const textArea = {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        paddingTop: "15px"
    }
    const textSobre = {
        width: "95%",
        height: "fit-content",  
        fontFamily: "fontTextPontos",
        fontSize: "17px",
        color: "white"
    }

    const avaliarArea = {
        textAlign: "center",
        maxWidth: "100%",
        backgroundColor: "#ffffff0D",
        padding: "10px 20px 20px 20px",
        borderRadius: "15px",
    }
    
    switch(page){
        case("museuoscarniemeyer"):
            Imagem = Oscar;
            NomeLugar = "Museu Oscar Niemeyer"
            Local = "museuoscarniemeyer"
            break;
        case("operadearame"):
            Imagem = OperaArame;
            NomeLugar = "Opera de Arame"
            Local = "operadearame"
            break;
        case("jardimbotanico"):
            Imagem = JardimBotanico;
            NomeLugar = "Jardim Botanico"
            Local = "jardimbotanico"
            break;
        case("ruaxvdesetembro"):
            Imagem = RuaXV;
            NomeLugar = "Rua xv de setembro"
            Local = "ruaxvdesetembro"
            break;
        case("mercadomunicipal"):
            Imagem = MercadoMunicipal;
            NomeLugar = "Mercado municipal"
            Local = "mercadomunicipal"
            break;
        case("passeiopublico"):
            Imagem = PasseioPublico;
            NomeLugar = "Passeio Publico"
            Local = "passeiopublico"
            break;
        case("memorialdecuritiba"):
            Imagem = Memorial;
            NomeLugar = "Memorial de Curitiba"
            Local = "memorialdecuritiba"
            break;
        case("centrohistorico"):
            Imagem = CentroHistorico;
            NomeLugar = "Centro Histórico"
            Local = "centrohistorico"
            break;
    }

    return(
        <div className="divBackground" style={{marginTop:"1%"}}>
            <LogoPqno/>
            <div className="divPageImage" style={divPageImage}>
                <img src={Imagem} alt="pageImage" style={imgPageImage}/> 
                <div className="divPontoName" style={pontoName}>{NomeLugar}</div>
            </div>
            <div className="textArea" style={textArea}>
                {PontoConteudo(Local)}
            </div>
            <div className="starsArea" style={textSobre}>
                <div style={avaliarArea}>
                    <h2><FontAwesomeIcon icon={estrelaCheia} /> VISITOU? AVALIE! <FontAwesomeIcon icon={estrelaCheia} /></h2>
                    <p>
                    <FontAwesomeIcon icon={estrelaCheia} /><FontAwesomeIcon icon={estrelaCheia} /><FontAwesomeIcon icon={estrelaCheia} /><FontAwesomeIcon icon={estrelaVazia} /><FontAwesomeIcon icon={estrelaVazia} />
                    </p>
                </div>
            </div>
        </div>
    ) 

    // Configurar avaliação

}

export default Ponto;