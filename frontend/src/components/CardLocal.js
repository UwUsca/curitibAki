import React, { useRef, useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

export default function CardLocal(props) {
    const imagem = props.imagem
    const texto = props.texto
    const id = props.id

    const history = useHistory()

    function trocaPag() {
        history.push(`/pontos-turisticos/${id}`)
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
        fontFamily:"Bebas Neue",
        color: "white",
        textShadow: "1px 1px 2px black, 0 0 1em black, 0 0 0.2em black"
    }

    return (
        <div className="divImgHolder" style={cardFundo} onClick={trocaPag}>
            <div style={cardImagem}>
                <img src={imagem} alt="imgCard" style={imgConfig}></img> 
            </div>
            <div className="divCardText" style={cardText}>{texto}</div>
        </div>
    )
}