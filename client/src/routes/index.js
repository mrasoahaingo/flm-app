import React from 'react'
import { Router, Route, IndexRoute, Link } from 'react-router'

import App from 'containers/App'
import Home from 'components/Home'
import About from 'components/About'

const routes = history => (
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/about" component={About}/>
      </Route>
    </Router>
)

export default routes
