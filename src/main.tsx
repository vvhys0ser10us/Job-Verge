import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'normalize.css'
import 'react-toastify/dist/ReactToastify.css'
import './index.css'
import { store } from './store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
