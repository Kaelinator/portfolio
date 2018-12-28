import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './routes/Home';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);
