import React from 'react'
import { Router, IndexRoute, Route } from 'react-router'

import App from './App'

import Landing from './pages/Landing'
import Running from './pages/Running'

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <IndexRoute component={Landing} />
      <Route path="/running" component={Running} />
    </Route>
  </Router>
)

export default Routes