// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react"
import Options from './components/Options';

test('renders emergency options', () => {
    render(<Options />);
    expect(screen.getByText('Contact Police')).toBeInTheDocument();
    expect(screen.getByText('Call Ambulance')).toBeVisible(); // test if fail
});