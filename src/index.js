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

// Add the following code snippet to your application before any other JavaScript/TypeScript code!
// For example put the code in your root index.[ts|js] file, right before you initialize your SPA / App.

initializeFaro({
  url: 'https://faro-collector-prod-us-east-0.grafana.net/collect/3d6e065aae3b7815d6a8a5a40d004541',
  app: {
    name: 'todolist',
    version: '1.0.0',
    environment: 'production'
  }
});
