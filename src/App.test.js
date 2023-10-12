import { render, screen } from '@testing-library/react';
import App from './App';
import Navigation from './components/Navigation';

test('renders the heading', () => {
  render(<App />);
  const linkElement = screen.getByText(/Unleash the Full Potential of Your Space with our Expertise!/i);
  expect(linkElement).toBeInTheDocument();
});

test('check if renobuild is rendered correctly', () => {
  render(<Navigation />);

  const brandElement = screen.getByText(/Renobuild/i);
  expect(brandElement).toBeInTheDocument();

})