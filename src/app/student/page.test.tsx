

import { render, screen } from '@testing-library/react';
import StudentPage from './page';

describe('StudentPage', () => {
  it('renders without crashing', () => {
    render(<StudentPage />);
  });

  it('renders the Navbar component', () => {
    render(<StudentPage />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('displays the StudentPage text', () => {
    render(<StudentPage />);
    expect(screen.getByText(/StudentPage/i)).toBeInTheDocument();
  });
});
