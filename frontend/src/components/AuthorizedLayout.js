import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'

import Navbar from '@/components/Navbar'

import Logout from '@/pages/Logout'

import Locais from '@/pages/Local/Locais'
import NovoLocal from '@/pages/Local/NovoLocal'
import EditarLocal from '@/pages/Local/EditarLocal'

export default function AuthorizedLayout() {
  return (
    <>
      <header className="app__header">
        <Navbar/>
      </header>

      <div className="app__main">
        <Switch>
          <Route path="/admin/logout" component={Logout}/>

          <Route path="/admin/locais/novo" component={NovoLocal}/>
          <Route path="/admin/locais/:id/editar" component={EditarLocal}/>
          <Route path="/admin/locais" component={Locais}/>
          
          <Redirect to="/admin/locais" />
        </Switch>
      </div>
    </>
  )
}