import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import { Router, browserHistory, match } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import createStore from 'store'
import createRoutes from 'routes'
import createClientResolver from 'async'

const store = createStore(browserHistory)
const history = syncHistoryWithStore(browserHistory, store)
const { pathname, search, hash } = window.location
const location = `${pathname}${search}${hash}`
const routes = createRoutes(history)

const attrs = { getState: store.getState, dispatch: store.dispatch }
const resolver = createClientResolver(history, routes, location, attrs)

match({ routes, history, location }, () => {
  render(
      <Provider store={store}>
        {routes}
      </Provider>
      , document.getElementById('app')
  )
})
