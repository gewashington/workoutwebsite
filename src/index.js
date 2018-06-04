/* eslint linebreak-style: 0 */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as firebase from 'firebase';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const config = {
  apiKey: 'AIzaSyAJi1ggKouHbGJ18nwxijpFlpPSTT5bwZY',
  authDomain: 'workout-reactjsvs.firebaseapp.com',
  databaseURL: 'https://workout-reactjsvs.firebaseio.com',
  projectId: 'workout-reactjsvs',
  storageBucket: 'workout-reactjsvs.appspot.com',
  messagingSenderId: '261410775666',
};
firebase.initializeApp(config);

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
