import { render, screen } from '@testing-library/react';
import StudentPage from './page';

describe('StudentPage', () => {
  it('renders without crashing', () => {
    render(<StudentPage />);
  });

  it('displays the StudentPage text', () => {
    render(<StudentPage />);
    expect(screen.getByText('StudentPage')).toBeInTheDocument();
  });
});
