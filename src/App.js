import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

import Home from './routes/Home/Home';
import Edit from './routes/Edit/Edit';
import Article from './routes/Article/Article';

firebase.initializeApp({
  apiKey: 'AIzaSyCbxy9RWIUIUckXpRPea0zwlg1drezBtHs',
  authDomain: 'portfolio-5e3de.firebaseapp.com',
  databaseURL: 'https://portfolio-5e3de.firebaseio.com',
  projectId: 'portfolio-5e3de',
  storageBucket: 'portfolio-5e3de.appspot.com',
  messagingSenderId: '441789742914',
});

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/edit" component={() => <Edit firebase={firebase} />} />
      <Route path="/:articleId" component={Article} />
    </Switch>
  </BrowserRouter>
);
