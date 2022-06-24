import React, { useRef, useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

import img_curitiba from '@/assets/img/curitiba.png'
import img_emergencia from '@/assets/img/hospital.jpg'
import img_faq from '@/assets/img/faq.jpg'

export default function HomeButton(props) {
    const page = props.page
    const imagem = props.imagem
    const texto = props.texto
    const id = props.id

    const history = useHistory()

    let img = null

    function trocaPag() {
        history.push(page)
    }
    
    switch (imagem) {
        case 'Curitiba':
            img = img_curitiba
            break

        case 'Emergencia':
            img = img_emergencia;
            break

        case 'Perguntas':
            img = img_faq;
            break
    }

    const buttonsCss = {
        height: "60%",
        width: "40%",
        minWidth: "370px",
        maxWidth: "750px",
        minHeight:"220px",
        maxHeight:"220px",
        backgroundImage: "linear-gradient(45deg, #2663E5 50%, #2B26C1 50%)",
        /*Modo escuro: 2663E5 2B26C1 | Modo Claro: 24e463 2cc424*/
        borderRadius: "10px",
        float: "left",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        alignItems: "center",
        margin: "10px",
        cursor: "pointer",
        overflow: "hidden"
    }

    const buttonsImg = {
        width: "125%",
        height: "100%",
        objectFit: "cover",
        borderRadius: "10px",
        opacity: "80%",
        transition: "opacity 0.1s ease-in-out, transform 0.1s ease-in-out"
    }

    const buttonsText = {
        color: "white",
        fontSize: "57px",
        position: "absolute",
        textAlign: "center",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        fontFamily: "Bebas Neue",
        textShadow: "1px 1px 2px black, 0 0 1em black, 0 0 0.2em black"
    }

    return(
        <div className="divButtons" id={id} style={buttonsCss} onClick={trocaPag}>
            <img src={img} alt="imgButton" style={buttonsImg}/>
            <div style={buttonsText}>{texto}</div>
        </div>
    )
}