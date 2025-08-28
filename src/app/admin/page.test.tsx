

import { render, screen } from '@testing-library/react';
import AdminPage from './page';

describe('AdminPage', () => {
  it('renders without crashing', () => {
    render(<AdminPage />);
  });

  it('renders the Navbar component', () => {
    render(<AdminPage />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('displays the AdminPage text', () => {
    render(<AdminPage />);
    expect(screen.getByText(/AdminPage/i)).toBeInTheDocument();
  });
});
