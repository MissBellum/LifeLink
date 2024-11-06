import { StrictMode } from 'react' 
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Options from './components/Options.jsx'

const OPTIONSDATA = [
    { id: 1, name: "Police Assistance", description: "Contact police for emergencies." },
    { id: 2, name: "Medical Emergency", description: "Get immediate medical help." },
    { id: 3, name: "Fire Department", description: "Call fire services for emergencies." },
    { id: 4, name: "Roadside Assistance", description: "Request roadside help for vehicle issues." },
    { id: 5, name: "Mental Health Support", description: "Get support for mental health crises." },
    { id: 6, name: "Report Suspicious Activity", description: "Report suspicious activities to authorities." },
]

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App subject="Options" options={ OPTIONSDATA } />
    {/* <Options /> */}
  </StrictMode>,
)