import { createStore as _createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'

import reducers from 'reducers'

export const initialState = {}

export default function (history, data = initialState) {
  const store = _createStore(
      reducers,
      data,
      compose(
          applyMiddleware(
              routerMiddleware(history)
          )
      )
  )

  return store;
}
