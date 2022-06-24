import React, { useRef, useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

import useFeather from '@/hooks/useFeather'

import LocalRepository from '@/repository/LocalRepository'

export default function Locais(props) {
  useFeather()

  const [locais, setLocais] = useState([])

  const history = useHistory()

  useEffect(() => {
    fetchLocais()
  }, [])

  async function fetchLocais() {
    try {
      setLocais(await LocalRepository.find())
    } catch (err) {
      console.error(err)
    }
  }

  function handleDataListItemEdit(event, item) {
    history.push(`/admin/locais/${item.id_local}/editar`)
  }

  function handleDataListItemRemove(event, item) {
    LocalRepository.remove(item.id_local)
      .then(() => {
        fetchLocais()
        alert('Local excluído com sucesso!')
      })
      .catch(console.error)
  }

  function renderDataListItems() {
    return locais.map((el) => {
      return (
        <div className="data-list-item" key={el.id_local}>
          <div className="data-list-item__left">
            <p className="data-list-item__title">{el.nome}</p>
            <p className="data-list-item__subtitle">{el.tipo}</p>
          </div>
          <div className="data-list-item__right">
            <div className="data-list-item__actions">
              <button className="data-list-item__action" onClick={(event) => handleDataListItemEdit(event, el)}>Editar</button>
              <button className="data-list-item__action" onClick={(event) => handleDataListItemRemove(event, el)}>Excluir</button>
            </div>
          </div>
        </div>
      )
    })
  }

  return (
    <div className="page">
      <div className="page__wrapper">
        <div className="page__header">
          <div className="page__header-left">  
            <h1 className="page__title">Locais</h1>
            <p className="page__subtitle">Cadastre, altere ou exclua locais</p>
          </div>
          <div className="page__header-right">
            <Link className="btn btn--one" to="/admin/locais/novo">
              <div className="btn__icon">
                <i data-feather="plus"></i>
              </div>
              Adicionar novo
            </Link>
          </div>
        </div>
        <div className="page__content">
          <div className="data-list">
            {renderDataListItems()}
          </div>
        </div>
      </div>
    </div>
  )
}

