import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

// Create root and render app with strict mode
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
