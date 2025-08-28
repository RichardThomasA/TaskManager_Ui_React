import { render, screen } from '@testing-library/react';
import Navbar from './navbar';

// Industry best practices: test rendering, accessibility, and visible links

describe('Navbar', () => {
  it('renders without crashing', () => {
    render(<Navbar />);
  });

  it('renders a nav element', () => {
    render(<Navbar />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('shows all expected navigation links', () => {
    render(<Navbar />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Admin')).toBeInTheDocument();
    expect(screen.getByText('Teacher')).toBeInTheDocument();
  });
});
