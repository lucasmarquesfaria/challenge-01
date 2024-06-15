import type { Meta, StoryObj } from '@storybook/react';

import { sampleMock } from './Sample.mock';

import { Sample } from '.';

const meta: Meta<typeof Sample> = {
  title: 'Sample',
  component: Sample,
  args: sampleMock,
};

export default meta;
type Story = StoryObj<typeof Sample>;

const template: Story = {
  render: (args) => (
    <div
      style={{
        maxWidth: '1200px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Sample {...args} />
    </div>
  ),
};

export const Default: Story = {
  ...template,
};
