import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './../src/assets/scss/base.scss';
import {BrowserRouter} from 'react-router-dom';
import 'antd/dist/reset.css';
import "@quasar/extras/ionicons-v4/ionicons-v4.css"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>,
)
