import React from 'react';
import ReactDOM from 'react-dom';
import { Amplify } from 'aws-amplify';

import { AWS_CONFIG } from '@constants';

import App from './App';
import 'normalize.css';
import './styles/main.css';

Amplify.configure(AWS_CONFIG);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
