import React from "react";
import { useNavigate } from "react-router-dom";
import BosqueAlemao from "../CssPages/Images/pontos/bosque-alemao.jpg"
import BosquePapa from "../CssPages/Images/pontos/bosque-papa.jpg"
import CentroHistorico from "../CssPages/Images/pontos/centro-historico.jpg"
import JardimBotanico from "../CssPages/Images/pontos/jardim-botanico.jpg"
import Memorial from "../CssPages/Images/pontos/memorial.jpg"
import MercadoMunicipal from "../CssPages/Images/pontos/mercado-municipal-de-curitiba.jpg"
import OperaArame from "../CssPages/Images/pontos/opera-de-arame.jpg"
import Oscar from "../CssPages/Images/pontos/oscar.jpg"
import ParqueBarigui from "../CssPages/Images/pontos/parque-barigui.jpg"
import ParqueLourenco from "../CssPages/Images/pontos/parque-sao-lourenco.jpg"
import ParqueTingui from "../CssPages/Images/pontos/parque-tingui.jpg"
import PasseioPublico from "../CssPages/Images/pontos/passeio-publico.jpg"
import RuaXV from "../CssPages/Images/pontos/rua-xv.jpg"
import ShopBarigui from "../CssPages/Images/pontos/shop-barigui.jpg"
import ShopBatel from "../CssPages/Images/pontos/shop-batel.jpg"
import ShopCuritiba from "../CssPages/Images/pontos/shop-curitiba.jpeg"
import ShopEstacao from "../CssPages/Images/pontos/shop-estacao.jpg"
import ShopJockey from "../CssPages/Images/pontos/shop-jockey.jpg"
import ShopPalladium from "../CssPages/Images/pontos/shop-palladium.jpg"


function Card(imagem, texto, link, idcard){
    let navigate = useNavigate();
    function trocaPag(){
        navigate("/pontosturisticos/"+link)
    }
    switch(imagem){
        case("BosqueAlemao"): imagem = BosqueAlemao; break;
        case("BosquePapa"): imagem = BosquePapa; break;
        case("CentroHistorico"): imagem = CentroHistorico; break;
        case("JardimBotanico"): imagem = JardimBotanico; break;
        case("Memorial"): imagem = Memorial; break;
        case("MercadoMunicipal"): imagem = MercadoMunicipal; break;
        case("OperaArame"): imagem = OperaArame; break;
        case("Oscar"): imagem = Oscar; break;
        case("ParqueBarigui"): imagem = ParqueBarigui; break;
        case("ParqueLourenco"): imagem = ParqueLourenco; break;
        case("ParqueTingui"): imagem = ParqueTingui; break;
        case("PasseioPublico"): imagem = PasseioPublico; break;
        case("RuaXV"): imagem = RuaXV; break;
        case("ShopBarigui"): imagem = ShopBarigui; break;
        case("ShopBatel"): imagem = ShopBatel; break;
        case("ShopCuritiba"): imagem = ShopCuritiba; break;
        case("ShopEstacao"): imagem = ShopEstacao; break;
        case("ShopJockey"): imagem = ShopJockey; break;
        case("ShopPalladium"): imagem = ShopPalladium; break;
    }
    const cardFundo = {
        height: "60%",
        width: "40%",
        minWidth: "370px",
        maxWidth: "400px",
        minHeight:"220px",
        maxHeight:"220px",
        backgroundImage: "linear-gradient(45deg, #2663E5 50%, #2B26C1 50%)",
        borderRadius: "10px",
        float: "left",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        flexDirection:"column",
        margin: "10px",
        cursor: "pointer"
    }
    const cardImagem = {
        width: "97%",
        height: "20%",
        maxHeight:"150px",
        borderRadius: "10px",
        opacity: "90%",
        overflow: "hidden",
        backgroundColor: "#000"
    }
    const imgConfig = {
        width:"100%",
        objectFit: "cover",
    }
    const cardText = {
        marginTop:"10px",
        width:"100%",
        fontSize: "40px",
        textAlign: "center",
        fontFamily:"fontCards",
        color: "white",
        textShadow: "1px 1px 2px black, 0 0 1em black, 0 0 0.2em black"
    }
return(
    <div className="divImgHolder"  style={cardFundo} onClick={trocaPag}>
        <div style={cardImagem} id={idcard}>
            <img src={imagem} alt="imgCard" style={imgConfig}></img> 
        </div>
            <div className="divCardText"style={cardText}>{texto}</div>
    </div>
)
}
export default Card;