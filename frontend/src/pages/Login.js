import React, { useRef, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import store from 'store'

import { validateToken, login } from '@/actions/Auth'

export default function Login(props) {
  const auth = useSelector(state => state.Auth)
  const authenticated = useSelector(state => state.Auth.authenticated)

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const dispatch = useDispatch()

  useEffect(() => {
    renewTokenIfExists()
  }, [])

  function renewTokenIfExists() {
    let token = store.get('token')

    if (token) {
      dispatch(validateToken(token))
    }
  }

  function handleEmailChange(event) {
    const value = event.target.value
    setEmail(value)
  }

  function handleSenhaChange(event) {
    const value = event.target.value
    setSenha(value)
  }

  function handleSubmit(event) {
    event.preventDefault()

    dispatch(login({ email, senha }))
  }

  if (authenticated) {
    return (<Redirect to="/admin"/>)
  }

  return (
    <div className="page page--login">
      <div className="setup-box setup-box--login">
        <div className="setup-box__titles">
          <h1 className="setup-box__title">Entrar</h1>
        </div>
        <form className="setup-box__form">
          <div className="inputs inputs--style-3">
            <div className="input input--full">
              <div className="input__container">
                <label>E-mail:</label>
                <input type="email" placeholder="E-mail" value={email} onChange={handleEmailChange} required={true}/>
              </div>
            </div>
            <div className="input input--full">
              <div className="input__container">
                <label>Senha:</label>
                <input type="password" placeholder="Senha" value={senha} onChange={handleSenhaChange} required={true}/>
              </div>
            </div>
          </div>
          {(auth.error) ? (
              <div className="setup-box__alert">
                <span className="setup-box__alert-message">Dados inválidos</span>
              </div>
          ) : null}
          <div className="setup-box__buttons">
            <button className="btn btn--login" onClick={handleSubmit}>Entrar</button>
          </div>
        </form>
      </div>
    </div>
  )
}