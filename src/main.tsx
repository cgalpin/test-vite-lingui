import React from 'react'
import ReactDOM from 'react-dom/client'
import I18nApp from './I18nApp.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
    <I18nApp />
  </React.StrictMode>,
)
