import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Logo from '@/components/Logo'
import HomeButton from '@/components/HomeButton'
import Text from '@/components/Text'
import CardEmergencia from '@/components/CardEmergencia'

import useFeather from '@/hooks/useFeather'

export default function Emergencia(props) {
  useFeather()

  return (
    <div className="divBackground" style={{marginTop: "1%"}}>
      <Logo/>

      <div className="divButtonsAreaPontos">
        <Text texto="Saúde"/>
        <CardEmergencia nome="Samu"/>
        <CardEmergencia nome="Bombeiros"/>
        <CardEmergencia nome="DefCivil"/>

        <Text texto="Segurança"/>
        <CardEmergencia nome="PolCivil"/>
        <CardEmergencia nome="PolMilitar"/>
        <CardEmergencia nome="PolRodoviaria"/>
      </div>

      <div className="divButtonsAreaPontos">
        <Text texto="Outros"/>
        <HomeButton page="/pontos-turisticos" imagem="Curitiba" texto="Pontos Turisticos" id="buttonPontos"/>
        <HomeButton page="/faq" imagem="Perguntas" texto="Perguntas Frequentes" id="buttonFaq"/>
      </div>
    </div>
  )
}

