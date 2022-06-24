import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Logo from '@/components/Logo'
import HomeButton from '@/components/HomeButton'
import Text from '@/components/Text'
import CardLocal from '@/components/CardLocal'

import useFeather from '@/hooks/useFeather'

import LocalRepository from '@/repository/LocalRepository'

import { SERVER_ADDRESS } from '@/globals'

export default function PontosTuristicos(props) {
  useFeather()

  const [pontosTuristicos, setPontosTuristicos] = useState([])
  const [parques, setParques] = useState([])
  const [shoppings, setShoppings] = useState([])

  useEffect(() => {
    fetchLocais()
  }, [])

  async function fetchLocais() {
    try {
      setPontosTuristicos(await LocalRepository.find({ tipo: 'Ponto Turístico' }))
      setParques(await LocalRepository.find({ tipo: 'Parque' }))
      setShoppings(await LocalRepository.find({ tipo: 'Shopping' }))
    } catch (err) {
      console.error(err)
    }
  }

  function getFotoLink(foto) {
    return `${SERVER_ADDRESS}/data/${foto}`
  }

  function renderPontosTuristicos() {
    return pontosTuristicos.map((el) => (
      <CardLocal key={el.id_local} imagem={getFotoLink(el.foto)} texto={el.nome} id={el.id_local}/>
    ))
  }

  function renderParques() {
    return parques.map((el) => (
      <CardLocal key={el.id_local} imagem={getFotoLink(el.foto)} texto={el.nome} id={el.id_local}/>
    ))
  }

  function renderShoppings() {
    return shoppings.map((el) => (
      <CardLocal key={el.id_local} imagem={getFotoLink(el.foto)} texto={el.nome} id={el.id_local}/>
    ))
  }

  return (
    <div className="divBackground" style={{marginTop: "1%"}}>
      <Logo/>

      <div className="divButtonsAreaPontos">
        <Text texto="Pontos Turísticos"/>
        {renderPontosTuristicos()}

        <Text texto="Parques"/>
        {renderParques()}

        <Text texto="Shoppings"/>
        {renderShoppings()}
      </div>

      <div className="divButtonsAreaPontos">
        <Text texto="Outros"/>
        <HomeButton page="/emergencia" imagem="Emergencia" texto="Números de Emergência" id="buttonHospital"/>
        <HomeButton page="/faq" imagem="Perguntas" texto="Perguntas Frequentes" id="buttonFaq"/>
      </div>
    </div>
  )
}

