import React from 'react';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';

import { ResponsiveProvider } from './components/DeviceQueries';
import { TagProvider } from './components/Tag/TagProvider';

import Home from './routes/Home/Home';
import Edit from './routes/Edit/Edit';
import Article from './routes/Article/Article';
import SignIn from './routes/SignIn';
import PrivateRoute from './routes/Edit/PrivateRoute';
import ArticleProvider from './components/Article/ArticleProvider';

export default () => (
  <ResponsiveProvider>
    <ArticleProvider>
      <TagProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <PrivateRoute path="/edit" component={Edit} />
            <Route path="/login" component={props => <SignIn {...props} />} />
            <Route path="/:articleId" component={Article} />
          </Switch>
        </BrowserRouter>
      </TagProvider>
    </ArticleProvider>
  </ResponsiveProvider>
);
