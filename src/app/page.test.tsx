import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Homepage from './page';

describe('Homepage', () => {
  it('renders without crashing', () => {
    render(<Homepage />);
  });

  it('renders the Navbar component', () => {
    render(<Homepage />);
    // Assuming Navbar renders a <nav> element
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('displays the Homepage text', () => {
    render(<Homepage />);
    expect(screen.getByText('Homepage')).toBeInTheDocument();
  });
  
  it('shows Admin, Student, and Teacher links in the Navbar', () => {
    render(<Homepage />);
    expect(screen.getByText('Admin')).toBeInTheDocument();
    expect(screen.getByText('Student')).toBeInTheDocument();
    expect(screen.getByText('Teacher')).toBeInTheDocument();
  });
});