import type { Meta, StoryObj } from '@storybook/react';

import { Sample } from '.';

const meta: Meta<typeof Sample> = {
  title: 'Sample',
  component: Sample,
  args: {
    heading: 'Hello World',
  },
};

export default meta;
type Story = StoryObj<typeof Sample>;

const template: Story = {
  render: (args) => (
    <div style={{ maxWidth: '1200px' }}>
      <Sample {...args} />
    </div>
  ),
};

export const Default: Story = {
  ...template,
};
