import { render, screen } from '@testing-library/react';

import { sampleMock as mock } from './Sample.mock';

import { Sample } from '@/components/Sample';

describe('<Sample />', () => {
  it('should render heading', () => {
    render(<Sample {...mock} />);

    const heading = screen.getByRole('heading', {
      name: mock.heading,
    });

    expect(heading).toBeInTheDocument();
  });

  it('should render image', () => {
    render(<Sample {...mock} />);

    const img = screen.getByRole('img', {
      name: mock.img.alt,
    });

    expect(img).toHaveAttribute('src', mock.img.src);
  });
});
