import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ToastContainer } from 'react-toastify'
import React from 'react'

createRoot(document.getElementById('root')!).render(
  <React.Fragment>
      <App />
    <ToastContainer />
  </React.Fragment>,
)
