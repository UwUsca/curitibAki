import React from "react";
import Logo from "../components/Logo";
import Card from "../components/Pontos/Card";
import pText from "../components/Pontos/pText";

function Pontos(){
    return(
        <div className="divBackground" style={{marginTop:"1%"}}>
            <Logo/>
            <div className="divButtonsAreaPontos">
                {pText("pontos turisticos")}
                {Card("Oscar","Museu oscar niemeyer","museuoscarniemeyer","cardOscar")}
                {Card("OperaArame","Opera de Arame","operadearame","cardOpera")}
                {Card("JardimBotanico","Jardim Botanico","jardimbotanico","cardJardim")}
                {Card("RuaXV","Rua xv de setembro","ruaxvdesetembro","cardXV")}
                {Card("MercadoMunicipal","Mercado municipal","mercadomunicipal","cardMercado")}
                {Card("PasseioPublico","passeio publico","passeiopublico","cardPasseio")}
                {Card("Memorial","memorial de curitiba","memorialdecuritiba","cardMemorial")}
                {Card("CentroHistorico","centro historico","centrohistorico","cardCentroH")}

                {pText("parques")}
                {Card("ParqueLourenco","parque são lourenço","parquesaolourenco","cardLourenco")}
                {Card("ParqueBarigui","parque barigui","parquebarigui","cardBarigui")}
                {Card("ParqueTingui","parque tingui","parquetingui","cardTingui")}
                {Card("BosqueAlemao","bosque alemão","bosquealemao","cardAlemao")}
                {Card("BosquePapa","bosque papa joao paulo ii","bosquepapajoaopauloii","cardPapa")}
                
                {pText("shoppings")}
                {Card("ShopPalladium","shopping palladium","shoppingpalladium","cardPalladium")}
                {Card("ShopCuritiba","shopping curitiba","shoppingcuritiba","cardCuritiba")}
                {Card("ShopEstacao","shopping estação","shoppingestacao","cardEstacao")}
                {Card("ShopBarigui","park shopping curitiba","shoppingpark","cardPark")}
                {Card("ShopJockey","jockey plaza shopping","shoppingjockey","cardJockey")}
                {Card("ShopBatel","pátio batel","shoppingbatel","cardBatel")}
                
            </div>
        </div>
    )
}

export default Pontos;