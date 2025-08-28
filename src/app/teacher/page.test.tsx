

import { render, screen } from '@testing-library/react';
import TeacherPage from './page';

describe('TeacherPage', () => {
  it('renders without crashing', () => {
    render(<TeacherPage />);
  });

  it('renders the Navbar component', () => {
    render(<TeacherPage />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('displays the TeacherPage text', () => {
    render(<TeacherPage />);
    expect(screen.getByText(/TeacherPage/i)).toBeInTheDocument();
  });
});
