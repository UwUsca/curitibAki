import React, { useContext, useEffect, useState } from "react";
import LogoPqno from "../../LogoPqno";
import PontoConteudo from "./PontoTexto";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from "@fortawesome/free-solid-svg-icons"
import { faFaceFrown, faFaceFrownOpen, faFaceMeh, faFaceSmile, faFaceGrinStars} from "@fortawesome/free-regular-svg-icons"
import { initializeApp } from "firebase/app";
import { getDocs, getFirestore, collection, addDoc, doc, deleteDoc} from "firebase/firestore";
import { app } from "../../../services/firebaseConfig";
import { AuthGoogleContext } from "../../../contexts/authGoogle";

import CentroHistorico from "../../CssPages/Images/pontos/centro-historico.jpg"
import JardimBotanico from "../../CssPages/Images/pontos/jardim-botanico.jpg"
import Memorial from "../../CssPages/Images/pontos/memorial.jpg"
import MercadoMunicipal from "../../CssPages/Images/pontos/mercado-municipal-de-curitiba.jpg"
import OperaArame from "../../CssPages/Images/pontos/opera-de-arame.jpg"
import Oscar from "../../CssPages/Images/pontos/oscar.jpg"
import ParqueBarigui from "../../CssPages/Images/pontos/parque-barigui.jpg"
import ParqueLourenco from "../../CssPages/Images/pontos/parque-sao-lourenco.jpg"
import ParqueTingui from "../../CssPages/Images/pontos/parque-tingui.jpg"
import BosqueAlemao from "../../CssPages/Images/pontos/bosque-alemao.jpg"
import BosquePapa from "../../CssPages/Images/pontos/bosque-papa.jpg"
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

    const [name, setName] = useState("")
    const [avaliacao, setAvaliacao] = useState("")
    const [users, setUsers] = useState([])
    
    const {user} = useContext(AuthGoogleContext);
    let userLogado = JSON.parse(user);


    const db = getFirestore(app);
    const userCollectionRef = collection(db, 'avaliacao');

    async function avaliar() {
        setName(userLogado.displayName);
        setAvaliacao("1")
        const user = await addDoc(userCollectionRef, {
            name,
            avaliacao,
        });
    }

    async function deletar(id) {
        const userDoc = doc(db, 'avaliacao', id);
        await deleteDoc(userDoc);
    }

    async function avaliar2() {
        setName(userLogado.displayName);
        setAvaliacao("2")
        const user = await addDoc(userCollectionRef, {
            name,
            avaliacao,
        });
    }

    async function avaliar3() {
        setName(userLogado.displayName);
        setAvaliacao("3")
        const user = await addDoc(userCollectionRef, {
            name,
            avaliacao,
        });
    }

    async function avaliar4() {
        setName(userLogado.displayName);
        setAvaliacao("4")
        const user = await addDoc(userCollectionRef, {
            name,
            avaliacao,
        });
    }

    async function avaliar5() {
        setName(userLogado.displayName);
        setAvaliacao("5")
        const user = await addDoc(userCollectionRef, {
            name,
            avaliacao,
        });
    }

    useEffect(()=>{
        const getUsers = async () => {
            const data = await getDocs(userCollectionRef);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getUsers();
    });

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
        backgroundColor: "rgb(28,28,28,0.5)",
        padding: "10px 20px 20px 20px",
        borderRadius: "15px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
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
            
        case("parquesaolourenco"):
            Imagem = ParqueLourenco;
            NomeLugar = "Parque São Lourenço"
            Local = "parquesaolourenco"
            break;
        case("parquebarigui"):
            Imagem = ParqueBarigui;
            NomeLugar = "Parque Barigui"
            Local = "parquebarigui"
            break;
        case("parquetingui"):
            Imagem = ParqueTingui;
            NomeLugar = "Parque Tingui"
            Local = "parquetingui"
            break;
        case("bosquealemao"):
            Imagem = BosqueAlemao;
            NomeLugar = "Bosque Alemão"
            Local = "bosquealemao"
            break;
        case("bosquepapajoaopauloii"):
            Imagem = BosquePapa;
            NomeLugar = "Bosque Papa João Paulo II"
            Local = "bosquepapajoaopauloii"
            break;
    
        case("shoppingpalladium"):
            Imagem = ShopPalladium;
            NomeLugar = "Shopping Palladium"
            Local = "shoppingpalladium"
            break;
        case("shoppingcuritiba"):
            Imagem = ShopCuritiba;
            NomeLugar = "Shopping Curitiba"
            Local = "shoppingcuritiba"
            break;
        case("shoppingestacao"):
            Imagem = ShopEstacao;
            NomeLugar = "Shopping Estação"
            Local = "shoppingestacao"
            break;
        case("shoppingpark"):
            Imagem = ShopBarigui;
            NomeLugar = "Park Shopping Curitiba"
            Local = "shoppingpark"
            break;
        case("shoppingjockey"):
            Imagem = ShopJockey;
            NomeLugar = "Jockey Plaza Shopping"
            Local = "shoppingjockey"
            break;
        case("shoppingbatel"):
            Imagem = ShopBatel;
            NomeLugar = "Pátio Batel"
            Local = "shoppingbatel"
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
                    <h2><FontAwesomeIcon icon={faStar} /> VISITOU? AVALIE! <FontAwesomeIcon icon={faStar} /></h2>
                    <div style={{display:"flex", gap:"5px"}}>
                        <button className="buttonAvaliar" style={{backgroundColor:"rgba(255,10,10,0.7)"}} onClick={avaliar}>
                            <FontAwesomeIcon icon={faFaceFrown}/>
                        </button>
                        <button className="buttonAvaliar" style={{backgroundColor:"rgba(242,206,2,0.7)"}} onClick={avaliar2}>
                            <FontAwesomeIcon icon={faFaceFrownOpen} />
                        </button>
                        <button className="buttonAvaliar" style={{backgroundColor:"rgba(235,255,10,0.7)"}} onClick={avaliar3}>
                            <FontAwesomeIcon icon={faFaceMeh} />
                        </button>
                        <button className="buttonAvaliar" style={{backgroundColor:"rgba(133,230,44,0.7)"}} onClick={avaliar4}>
                            <FontAwesomeIcon icon={faFaceSmile} />
                        </button>
                        <button className="buttonAvaliar" style={{backgroundColor:"rgba(32,156,5,0.7)"}} onClick={avaliar5}>
                            <FontAwesomeIcon icon={faFaceGrinStars} />
                        </button>
                    </div>
                    <div style={{maxWidth: "50%", marginTop: "15px"}}>
                        <tr>
                            {users.map((user) => {
                                return (
                                    <div key={user.id}>
                                        <td style={{marginLeft: "20px"}}>
                                            {user.name}:  {user.avaliacao}  <button style={{fontSize: "20px", height: "20px", backgroundColor: "rgb(28,28,28,0)", color: "#f55e53", border: "none", borderRadius: "100%"}} onClick={()=> deletar(user.id)}>x</button>
                                        </td>
                                        
                                    </div>
                                )
                            })}
                        </tr>
                    </div>
                </div>
            </div>
        </div>
    ) 

    // Configurar avaliação

}

export default Ponto;