import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import DataProviderComponent from './pages/contextpage.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <DataProviderComponent>
      <App />
    </DataProviderComponent>
  </BrowserRouter>
)
