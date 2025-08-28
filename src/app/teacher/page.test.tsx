import { render, screen } from '@testing-library/react';
import TeacherPage from './page';

describe('TeacherPage', () => {
  it('renders without crashing', () => {
    render(<TeacherPage />);
  });

  it('displays the TeacherPage text', () => {
    render(<TeacherPage />);
    expect(screen.getByText('TeacherPage')).toBeInTheDocument();
  });
});
