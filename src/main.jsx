import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// Initialize visitor counter from localStorage or set to 1
const initVisitorCount = () => {
  const count = localStorage.getItem('visitorCount')
  if (!count) {
    localStorage.setItem('visitorCount', '1')
    return 1
  }
  const newCount = parseInt(count) + 1
  localStorage.setItem('visitorCount', newCount.toString())
  return newCount
}

// Set visitor count in window object to use across components
window.visitorCount = initVisitorCount()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)