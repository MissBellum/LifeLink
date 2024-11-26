import { render, screen } from '@testing-library/react';
import App from './App';
// import Options from './components/Options';

test('renders emergency options', () => {
  render(<App />);
  expect(screen.getByText('Contact Police')).toBeInTheDocument();
  expect(screen.getByText('Call Ambulance')).toBeVisible(); // test if fail
});
