import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { initializeFaro } from '@grafana/faro-web-sdk';
import store from './store'
import App from './components/App'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>
)

initializeFaro({
  // Mandatory, the URL of the Grafana Cloud collector with embedded application key.
  // Copy from the configuration page of your application in Grafana.
  url: 'http://faro-collector-us-central-0.grafana.net/collect/{app-key}',

  // Mandatory, the identification label(s) of your application
  app: {
    name: 'todolist',
    version: '1.0.0', // Optional, but recommended
  },
});
