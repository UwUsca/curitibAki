import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Logo from '@/components/Logo'
import HomeButton from '@/components/HomeButton'

import useFeather from '@/hooks/useFeather'

export default function Inicio(props) {
  useFeather()

  return (
    <div className="divBackground" style={{marginTop: "5%"}}>
      <Logo/>

      <div className="divButtonsArea">
        <HomeButton page="/pontos-turisticos" imagem="Curitiba" texto="Pontos Turisticos" id="buttonPontos"/>
        <HomeButton page="/emergencia" imagem="Emergencia" texto="Números de Emergência" id="buttonHospital"/>
        <HomeButton page="/faq" imagem="Perguntas" texto="Perguntas Frequentes" id="buttonFaq"/>
      </div>
    </div>
  )
}

