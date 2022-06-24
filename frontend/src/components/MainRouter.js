import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import AuthorizedRoute from '@/components/AuthorizedRoute'
import AuthorizedLayout from '@/components/AuthorizedLayout'
import UnauthorizedLayout from '@/components/UnauthorizedLayout'

import Login from '@/pages/Login'

import { BASEPATH } from '@/globals'

export default function Main(props) {
  return (
    <div className="app">
      <Router basename={BASEPATH}>
        <Switch>
          <AuthorizedRoute path="/admin" component={AuthorizedLayout} />
          <Route path="/login" component={Login} />
          <Route path="/" component={UnauthorizedLayout} />
        </Switch>
      </Router>

    </div>
  );
}
