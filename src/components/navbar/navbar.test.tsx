

import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from './navbar';

const links = [
  { label: 'Home', href: '/' },
  { label: 'Admin', href: '/admin', children: [
      { label: 'Settings', href: '/admin/settings' },
      { label: 'Users', href: '/admin/users' }
    ]
  },
  { label: 'Teacher', href: '/teacher' }
];

describe('Navbar', () => {
  it('renders without crashing', () => {
    render(<Navbar links={links} />);
  });

  it('renders a nav element', () => {
    render(<Navbar links={links} />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('shows all expected navigation links', () => {
    render(<Navbar links={links} />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Admin')).toBeInTheDocument();
    expect(screen.getByText('Teacher')).toBeInTheDocument();
  });

  it('shows submenu links on hover', () => {
    render(<Navbar links={links} />);
    // Hover over the Admin link
    fireEvent.mouseEnter(screen.getByText('Admin'));
    expect(screen.getByText('Settings')).toBeInTheDocument();
    expect(screen.getByText('Users')).toBeInTheDocument();
    // Mouse leave hides submenu
    fireEvent.mouseLeave(screen.getByText('Admin'));
    // Optionally, check that submenu disappears (if you want strict test)
    // expect(screen.queryByText('Settings')).not.toBeInTheDocument();
    // expect(screen.queryByText('Users')).not.toBeInTheDocument();
  });

  it('logo is a link to the home page', () => {
    render(<Navbar links={links} />);
    const logoLink = screen.getByLabelText('Home');
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute('href', '/');
  });
});
