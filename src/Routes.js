import React from 'react'
import { Router, IndexRoute, Route } from 'react-router'

import App from './App'

import Landing from './pages/Landing'

import PortfolioScaffold from './UI/PortfolioScaffold'

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <IndexRoute component={Landing} />
      <Route path="/running" component={() => <PortfolioScaffold pillar="running" />} />
      <Route path="/coding" component={() => <PortfolioScaffold pillar="coding" />} />
      <Route path="/creating" component={() => <PortfolioScaffold pillar="creating" />} />
    </Route>
  </Router>
)

export default Routes