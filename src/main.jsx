import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.scss'
import { Context } from './components/context/Context.jsx'
import './i18n.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Context>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Context>
)
