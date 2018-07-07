import React from 'react'
import { Router, IndexRoute, Route } from 'react-router'

import App from './App'

import Landing from './pages/Landing'
import Coding from './pages/Coding'
import Running from './pages/Running'
import Creating from './pages/Creating'

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <IndexRoute component={Landing} />
      <Route path="/running" component={Running} />
      <Route path="/coding" component={Coding} />
      <Route path="/creating" component={Creating} />
    </Route>
  </Router>
)

export default Routes