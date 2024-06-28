import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { HomePage } from '.';

jest.mock('@/components/Sample', () => ({
  Sample: () => <div data-testid="mock-sample" />,
}));

describe('<Home />', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    );
  });

  it('should render Sample', () => {
    const SampleMock = screen.getByTestId('mock-sample');

    expect(SampleMock).toBeInTheDocument();
  });

  it('should render link', () => {
    const profileLink = screen.getByRole('link', {
      name: 'Profile Page',
    });

    expect(profileLink).toHaveAttribute('href', '/profile');
  });
});
