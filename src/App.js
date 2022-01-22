import React from 'react';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';

import { ResponsiveProvider } from './components/DeviceQueries';
import { TagProvider } from './components/Tag/TagProvider';

import Home from './routes/Home/Home';
import StaticLoader from './routes/StaticLoader';
import Edit from './routes/Edit/Edit';
import SignIn from './routes/SignIn';
import PrivateRoute from './routes/Edit/PrivateRoute';
import ArticleProvider from './components/Article/ArticleProvider';
import ArticleLoader from './routes/Article/ArticleLoader';

export default () => (
  <ResponsiveProvider>
    <ArticleProvider>
      <TagProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <PrivateRoute path="/edit" component={Edit} />
            <Route path="/login" component={props => <SignIn {...props} />} />
            <Route path="/resume" component={() => <StaticLoader load="Private CS Resume.pdf"/>} />
            <Route path="/static/:load" component={StaticLoader} />
            <Route path="/:articleUrl" component={ArticleLoader} />
          </Switch>
        </BrowserRouter>
      </TagProvider>
    </ArticleProvider>
  </ResponsiveProvider>
);
