import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import './css/index.css'
import App from './App.jsx'
import { MovieProvider } from './contexts/MovieContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <MovieProvider>
        <App />
      </MovieProvider>
    </HashRouter>
  </StrictMode>,
)