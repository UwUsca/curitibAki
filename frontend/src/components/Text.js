import React, { useRef, useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

import logo_icon from '@/assets/img/logo_icon.png'

export default function Text(props) {
    const texto = props.texto

    const style1 = {
        maxWidth:"40px",
        transform: "rotate(270deg)",
        marginRight:"10px"
    }

    const style2 = {
        maxWidth: "40px",
        transform: "rotate(90deg)",
        marginLeft:"10px"
    }

    const textFont = {
        marginTop:"10px",
        marginBottom:"5px",
        width:"100%",
        fontSize: "280%",
        textAlign: "center",
        fontFamily:"Bebas Neue",
        color: "white",
        textShadow: "1px 1px 2px black, 0 0 1em black, 0 0 0.2em black"
    }

    return(
        <a className="pText" style={textFont}>
            <img className="pIcon" src={logo_icon} alt="logotxt" style={style1}/>
            {texto}
            <img className="pIcon" src={logo_icon} alt="logotxt" style={style2}/>
        </a>
    )
}