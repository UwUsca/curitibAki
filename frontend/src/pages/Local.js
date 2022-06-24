import React, { useRef, useState, useEffect } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as estrelaCheia } from '@fortawesome/free-solid-svg-icons'
import { faStar as estrelaVazia } from '@fortawesome/free-regular-svg-icons'
import { faCircleInfo, faClock, faMap, faTicket, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'

import LogoPequena from '@/components/LogoPequena'

import LocalRepository from '@/repository/LocalRepository'

import useFeather from '@/hooks/useFeather'

import { SERVER_ADDRESS  } from '@/globals'

export default function Local(props) {
    useFeather()

    const [local, setLocal] = useState({})

    const params = useParams()

    useEffect(() => {
        fetchLocal()
    }, [])

    async function fetchLocal() {
        const id = params.id
    
        try {
          setLocal(await LocalRepository.findById(id))
        } catch (err) {
          console.error(err)
        }
      }

    function getFotoLink(foto) {
        return `${SERVER_ADDRESS}/data/${foto}`
    }

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
        fontFamily: "Bebas Neue",
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
        fontFamily: "Arvo",
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

    const textBlock = {
        maxWidth: "100%",
        marginBottom: "10px",
        backgroundColor: "rgb(28,28,28,0.5)",
        padding: "10px 20px 10px 20px",
        borderRadius: "15px",
    }

    function renderSobre() {
        if (local.sobre && local.sobre !== 'null') {
            return (
                <div style={textBlock}>
                    <h2><FontAwesomeIcon icon={faCircleInfo}/> SOBRE O LOCAL</h2>
                    <p dangerouslySetInnerHTML={{ __html: local.sobre }}></p>
                </div>
            )
        }
    }

    function renderHorarios() {
        if (local.horarios && local.horarios !== 'null') {
            return (
                <div style={textBlock}>
                    <h2><FontAwesomeIcon icon={faClock}/> HORÁRIOS</h2>
                    <p dangerouslySetInnerHTML={{ __html: local.horarios }}></p>
                </div>
            )
        }
    }

    function renderIngressos() {
        if (local.ingressos && local.ingressos !== 'null') {
            return (
                <div style={textBlock}>
                    <h2><FontAwesomeIcon icon={faTicket}/> INGRESSOS</h2>
                    <p dangerouslySetInnerHTML={{ __html: local.ingressos }}></p>
                </div>
            )
        }
    }

    function renderComoChegar() {
        if ((local.endereco && local.endereco !== 'null') || (local.iframe_maps && local.iframe_maps.length > 0)) {
            return (
                <div style={textBlock}>
                    <h2><FontAwesomeIcon icon={faMap}/> COMO CHEGAR</h2>
                    {(local.iframe_maps && local.iframe_maps.length > 0)
                    ? (<iframe src={local.iframe_maps}></iframe>)
                    : null }

                    <p dangerouslySetInnerHTML={{ __html: local.endereco }}></p>
                </div>
            )
        }
    }

    function renderSemInformacoes() {
        if (
            (!local.sobre || local.sobre === 'null') &&
            (!local.horarios || local.horarios === 'null') &&
            (!local.ingressos || local.ingressos === 'null') &&
            (!local.endereco || local.endereco === 'null')
        ) {
            return (
                <div style={{...textBlock, display: 'flex', justifyContent: 'center'}}>
                    <h2 style={{fontFamily: "Arvo", color: "white"}}><FontAwesomeIcon icon={faTriangleExclamation}/> SEM INFORMAÇÕES DISPONÍVEIS! <FontAwesomeIcon icon={faTriangleExclamation}/></h2>
                </div>
            )
        }
    }

    return (
        <div className="divBackground" style={{marginTop: "1%"}}>
            <LogoPequena/>

            <div className="divPageImage" style={divPageImage}>
                <img src={getFotoLink(local.foto || '')} alt="pageImage" style={imgPageImage}/> 
                <div className="divPontoName" style={pontoName}>{local.nome}</div>
            </div>

            <div className="textArea" style={textArea}>
                <div className="textSobre" style={textSobre}>
                    {renderSobre()}
                    {renderHorarios()}
                    {renderIngressos()}
                    {renderComoChegar()}
                    {renderSemInformacoes()}
                </div>
            </div>
        </div>
    )
}

