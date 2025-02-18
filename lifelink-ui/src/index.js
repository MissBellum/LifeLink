import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const OPTIONSDATA = [
  { id: 1, name: "Police Assistance", description: "Contact police for emergencies." },
  { id: 2, name: "Medical Emergency", description: "Get immediate medical help." },
  { id: 3, name: "Fire Department", description: "Call fire services for emergencies." },
  { id: 4, name: "Roadside Assistance", description: "Request roadside help promptly." },
  { id: 5, name: "Mental Health Support", description: "Get support for mental health crises." },
  { id: 6, name: "Report Suspicious Activity", description: "Report suspicious activities." },
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App options={ OPTIONSDATA } />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
