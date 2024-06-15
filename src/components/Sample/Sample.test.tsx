import { render, screen } from '@testing-library/react';

import { Sample, SampleProps } from '@/components/Sample';

const mock: SampleProps = {
  heading: 'Loren ipsum dolor',
};

describe('<Sample />', () => {
  it('should render heading', () => {
    render(<Sample {...mock} />);

    const heading = screen.getByRole('heading', {
      name: mock.heading,
    });

    expect(heading).toBeInTheDocument();
  });
});
