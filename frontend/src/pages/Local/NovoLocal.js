import React, { useRef, useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

import TextInput from '@/components/Input/TextInput'
import TextAreaInput from '@/components/Input/TextAreaInput'
import SelectInput from '@/components/Input/SelectInput'
import FileInput from '@/components/Input/FileInput'

import useFeather from '@/hooks/useFeather'

import LocalRepository from '@/repository/LocalRepository'

export default function NovoLocal(props) {
  useFeather()

  const [form, setForm] = useState({})

  const history = useHistory()

  function handleInputChange(attribute, value) {
    console.log(attribute, value)
    
    setForm({
      ...form,
      [attribute]: value
    })
  }

  function handleGoBack() {
    history.goBack()
  }

  function handleSubmit(event) {
    event.preventDefault()

    console.log('form submitted', form)

    let formData = new FormData()

    for (let key of Object.keys(form)) {
      formData.append(key, form[key])
    }

    console.log(formData)

    LocalRepository.create(formData)
      .then(() => {
        alert('Local cadastrado com sucesso!')
        history.push('/admin/locais')
      })
      .catch((err) => console.error)
  }

  return (
    <div className="page">
      <div className="page__wrapper">
        <div className="page__header">
          <div className="page__header-left">
            <h1 className="page__title">Novo Local</h1>
            <p className="page__subtitle">Preencha os campos para cadastrar um novo local</p>
          </div>
          <div className="page__header-right"></div>
        </div>
        <div className="page__content">
          <form className="form" onSubmit={handleSubmit}>
            <div className="inputs inputs--style-2">
              <div className="multi-input">
                <TextInput classes="input--w3" attribute="nome" placeholder="Nome" required={true} onChange={handleInputChange}/>
                <SelectInput
                  classes="input--w2-q2"
                  attribute="tipo"
                  placeholder="Tipo"
                  required={true}
                  options={[
                    { label: 'Ponto Turístico', value: 'Ponto Turístico' },
                    { label: 'Parque', value: 'Parque' },
                    { label: 'Shopping', value: 'Shopping' },
                  ]}
                  onChange={handleInputChange}
                />
              </div>
              <TextAreaInput classes="input--full" attribute="sobre" placeholder="Sobre" onChange={handleInputChange}/>
              <div className="multi-input">
                <TextAreaInput classes="input--w4" attribute="horarios" placeholder="Horários" onChange={handleInputChange}/>
                <TextAreaInput classes="input--w4" attribute="ingressos" placeholder="Ingressos" onChange={handleInputChange}/>
              </div>
              <div className="multi-input">
                <TextAreaInput classes="input--w4" attribute="endereco" placeholder="Endereço" onChange={handleInputChange}/>
                <TextAreaInput classes="input--w4" attribute="iframe_maps" placeholder="Iframe do Google Maps" onChange={handleInputChange}/>
              </div>
              <FileInput classes="input--w3" attribute="foto" label="Foto" required={true} onChange={handleInputChange}/>
            </div>

            <div className="form__actions">
              <button type="submit" className="btn btn--three">Enviar</button>
              <button type="button" className="btn btn--two" onClick={handleGoBack}>Voltar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

