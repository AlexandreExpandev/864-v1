import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '../components/ui/Select';

const meta: Meta<typeof Select> = {
  title: 'UI/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    error: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    label: 'Choose a number',
    children: (
      <>
        <option value="">Select an option</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </>
    ),
  },
};

export const WithError: Story = {
  args: {
    label: 'Choose a number',
    error: 'This field is required.',
    children: (
      <>
        <option value="">Select an option</option>
        <option value="1">One</option>
        <option value="2">Two</option>
      </>
    ),
  },
};

export const Disabled: Story = {
  args: {
    label: 'Choose a number',
    disabled: true,
    children: (
      <>
        <option value="">Select an option</option>
        <option value="1">One</option>
      </>
    ),
  },
};
