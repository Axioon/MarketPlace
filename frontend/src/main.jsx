//main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom"
import { CountProvider } from './context/CountProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CountProvider>
    <BrowserRouter>
        <App />
        </BrowserRouter>
    </CountProvider>
       
  </React.StrictMode>,
)
