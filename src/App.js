import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './routes/Home';

const ToDo = () => <h1>Under construction</h1>;

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/edit" component={ToDo} />
      <Route path="/:articleId" component={ToDo} />
    </Switch>
  </BrowserRouter>
);
