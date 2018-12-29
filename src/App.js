import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import firebase from 'firebase/app';
import 'firebase/auth';

import Home from './routes/Home';
import Edit from './routes/Edit';

firebase.initializeApp({
  apiKey: 'AIzaSyCbxy9RWIUIUckXpRPea0zwlg1drezBtHs',
  authDomain: 'portfolio-5e3de.firebaseapp.com',
  databaseURL: 'https://portfolio-5e3de.firebaseio.com',
  projectId: 'portfolio-5e3de',
  storageBucket: 'portfolio-5e3de.appspot.com',
  messagingSenderId: '441789742914',
});

const ToDo = () => <h1>Under construction</h1>;

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/edit" component={() => <Edit firebase={firebase} />} />
      <Route path="/:articleId" component={ToDo} />
    </Switch>
  </BrowserRouter>
);
