import React from 'react'
import { Router, IndexRoute, Route } from 'react-router'

import App from './App'

import Landing from './pages/Landing'

import PortfolioScaffold from './UI/PortfolioScaffold'
import runningData from './meta/running-data'
import codingData from './meta/coding-data'
import creatingData from './meta/creating-data'

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <IndexRoute component={Landing} />
      <Route path="/running" component={(props) => <PortfolioScaffold {...runningData} />} />
      <Route path="/coding" component={(props) => <PortfolioScaffold {...codingData} />} />
      <Route path="/creating" component={(props) => <PortfolioScaffold {...creatingData} />} />
    </Route>
  </Router>
)

export default Routes