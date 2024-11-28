import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders emergency options', () => {
  render(<App />);
  expect(screen.getByText('Contact police')).toBeInTheDocument();
  expect(screen.getByText('Call Ambulance')).toBeVisible(); // test if fail
});
