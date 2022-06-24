import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import MainRouter from './components/MainRouter'

import store from './store'

import 'normalize.css'
import './assets/css/common.css'
import './assets/css/inputs.scss'
import './assets/css/all.css'
import './assets/css/curitibaki.scss'

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <Component/>
    </Provider>
    , document.getElementById('root')
  )
}

render(MainRouter)

// webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('@/components/MainRouter', () => {
    render(MainRouter)
  })
}