import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import registerServiceWorker from './registerServiceWorker';
import Routes from './Routes';


registerServiceWorker();
ReactDOM.render(
 <Routes history={browserHistory} />,
 document.getElementById('root')
);
