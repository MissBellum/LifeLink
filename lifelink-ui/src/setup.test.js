// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { render, screen, cleanup } from "@testing-library/react"
import Options from './components/Options';

const OPTIONSDATA = [
    { id: 1, name: "Police Assistance", description: "Contact police for emergencies." },
    { id: 2, name: "Medical Emergency", description: "Get immediate medical help." },
    { id: 3, name: "Fire Department", description: "Call fire services for emergencies." },
    { id: 4, name: "Roadside Assistance", description: "Request roadside help promptly." },
    { id: 5, name: "Mental Health Support", description: "Get support for mental health crises." },
    { id: 6, name: "Report Suspicious Activity", description: "Report suspicious activities." },
]

afterEach(() => {
    cleanup(); // Clean up the DOM after each test
});

test('renders emergency options', () => {
    render(<Options options={ OPTIONSDATA } />);
    expect(screen.getByText('Contact police')).toBeInTheDocument();
    expect(screen.getByText('Get help')).toBeVisible(); // test if fail
});