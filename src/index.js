import React from 'react';
import ReactDOM from 'react-dom';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

firebase.initializeApp({
  apiKey: 'AIzaSyCbxy9RWIUIUckXpRPea0zwlg1drezBtHs',
  authDomain: 'portfolio-5e3de.firebaseapp.com',
  databaseURL: 'https://portfolio-5e3de.firebaseio.com',
  projectId: 'portfolio-5e3de',
  storageBucket: 'portfolio-5e3de.appspot.com',
  messagingSenderId: '441789742914',
});

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

registerServiceWorker();
