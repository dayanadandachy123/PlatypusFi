// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders PlatypusFi title', () => {
    render(<App />);
    const titleElement = screen.getByText(/PlatypusFi/i);
    expect(titleElement).toBeInTheDocument();
});
