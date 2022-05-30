import { render, screen } from '@testing-library/react';
import App from './App';

test('test if the shopping store text is available', () => {
  render(<App />);
  const linkElement = screen.getByText(/The Shopping Store/i);
  expect(linkElement).toBeInTheDocument();
});

test('test if home text is available', () => {
  render(<App />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});

test('test if Login text is available', () => {
  render(<App />);
  const linkElement = screen.getByText(/Login/i);
  expect(linkElement).toBeInTheDocument();
});

test('test if category text is available', () => {
  render(<App />);
  const linkElement = screen.getByText(/category/i);
  expect(linkElement).toBeInTheDocument();
});
