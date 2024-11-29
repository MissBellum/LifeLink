import '@testing-library/jest-dom';
import { render, screen, cleanup } from '@testing-library/react';
import App from './App';

const OPTIONSDATA = [
  { id: 1, name: "Police Assistance", description: "Contact police for emergencies." },
  { id: 2, name: "Medical Emergency", description: "Get immediate medical help." },
  { id: 3, name: "Fire Department", description: "Call fire services for emergencies." },
  { id: 4, name: "Roadside Assistance", description: "Request roadside help promptly." },
  { id: 5, name: "Mental Health Support", description: "Get support for mental health crises." },
  { id: 6, name: "Report Suspicious Activity", description: "Report suspicious activities." },
]

afterEach(() => {
  cleanup();
  jest.restoreAllMocks();
  jest.clearAllTimers();
});

test('renders emergency options', () => {
  render(<App options={ OPTIONSDATA }/>);
  expect(screen.getByText('Police Assistance')).toBeInTheDocument();
  expect(screen.getByText('Medical Emergency')).toBeVisible(); // test if fail
  // console.log(OPTIONSDATA)
});
