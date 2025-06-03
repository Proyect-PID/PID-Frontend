import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { JoyeriaApp } from './JoyeriaApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <JoyeriaApp />
    </BrowserRouter>
  </StrictMode>,
)
