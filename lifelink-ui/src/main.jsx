import { StrictMode } from 'react' 
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const OPTIONS = [
    {
        
    }
]

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App subject="Crank" tasks={ OPTIONS } /> 
    {/* <Form names={ names } /> */}
  </StrictMode>,
)