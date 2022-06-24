import React, { useRef, useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import classNames from 'classnames'

import logo from '@/assets/img/logo.png'

export default function Navbar(props) {
  const user = useSelector(state => state.Auth.user)

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <div className="navbar__logo">
          <img src={logo}/>
        </div>
      </div>
      <div className="navbar__right">
        <div className="navbar__user">
          <p className="navbar__user-name">{user.nome}</p>
          <Link className="navbar__user-logout" to="/admin/logout">Sair</Link>
        </div>
      </div>
    </nav>
  )
}