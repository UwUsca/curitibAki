import React, { useRef, useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

import image from '@/assets/img/logo.png'

export default function Logo(props) {
    const history = useHistory()

    function handleClick(event) {
        history.push('/')
    }

    const divLogo = {
        width: "fit-content",
        height: "20%",
        textAlign: "center",
        maxHeight: "300px",
        boxShadow: "inset 0px 0px 100px rgba(0,0,0, 0.3), 0px 0px 10px rgba(0,0,0, 0.3)"
    }

    const imgLogo = {
        width: "90%",
        height: "90%",
        maxHeight: "150px",
        transition: "transform 0.1s ease-in-out",
        cursor: "pointer"
    }

    return (
        <div id="logoIndex" style={divLogo}>
            <img src={image} alt="logo" style={imgLogo} onClick={handleClick}/>
        </div>
    )
}