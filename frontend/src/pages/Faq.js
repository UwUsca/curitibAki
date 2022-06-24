import React, { useRef, useState, useEffect } from 'react'

import logo_icon from '@/assets/img/logo_icon.png'

import Logo from '@/components/Logo'
import HomeButton from '@/components/HomeButton'
import Text from '@/components/Text'

import useFeather from '@/hooks/useFeather'

export default function FAQ(props) {
  useFeather()

  const style1 = {
    maxWidth:"40px",
    transform: "rotate(270deg)",
    marginRight:"10px",
    marginBottom:"-10px"
}

  return (
    <div className="divBackground" style={{marginTop: "1%"}}>
      <Logo/>

      <div className="divButtonsAreaPontos">
        <div className="areaPerguntas">
            <div className="pergunta">
                <h2>
                    <img className="pIcon" src={logo_icon} alt="logotxt" style={style1}/>
                    ONDE COMPRAR INGRESSOS PARA A LINHA DE TURISMO?
                </h2>
            </div>
            <div className="resposta">
                R: As cartelas podem ser adquiridas diretamente nos ônibus (há um cobrador na parte inferior) ou em qualquer ponto de embarque. Também é vendido na Rodoferroviária das 12h30 às 18h30 em dias úteis. O preço é de R$50 (2021). A forma de pagamento da cartela da Linha Turismo é somente em dinheiro.
            </div>

            <div className="pergunta">
                <h2>
                    <img className="pIcon" src={logo_icon} alt="logotxt" style={style1}/>
                    ONDE POSSO ENTRAR EM CONTATO COM OS DONOS DO SITE?
                </h2>
            </div>
            <div className="resposta">
                R: Para nos contactar, basta enviar um email para: email@dominio.com
            </div>
        </div>
      </div>

      <div className="divButtonsAreaPontos">
        <Text texto="Outros"/>
        <HomeButton page="/pontos-turisticos" imagem="Curitiba" texto="Pontos Turisticos" id="buttonPontos"/>
        <HomeButton page="/emergencia" imagem="Emergencia" texto="Números de Emergência" id="buttonHospital"/>
      </div>
    </div>
  )
}

