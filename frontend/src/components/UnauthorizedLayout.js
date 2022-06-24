import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'

import ChangeTheme from '@/components/ChangeTheme'

import Inicio from '@/pages/Inicio'
import PontosTuristicos from '@/pages/PontosTuristicos'
import Local from '@/pages/Local'
import Emergencia from '@/pages/Emergencia'
import FAQ from '@/pages/FAQ'

export default function UnauthorizedLayout() {
  return (
    <>
      <Switch>
          <Route path="/faq" component={FAQ} />
          <Route path="/emergencia" component={Emergencia} />
          <Route path="/pontos-turisticos/:id" component={Local} />
          <Route path="/pontos-turisticos" component={PontosTuristicos} />
          <Route path="/" component={Inicio} />
      </Switch>

      <ChangeTheme/>
    </>
  )
}