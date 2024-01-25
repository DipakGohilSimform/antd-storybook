import type { Meta, StoryObj } from '@storybook/react'
import { Title } from '.'

const meta: Meta<typeof Title> = {
  title: 'Ant Design/Typography/Title',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'radio',
      options: ['secondary', 'success', 'warning', 'danger']
    },
    level: {
      control: 'radio',
      options: [1, 2, 3, 4, 5]
    },
    code: { control: 'boolean' },
    copyable: { control: 'boolean' },
    delete: { control: 'boolean' },
    disabled: { control: 'boolean' },
    editable: { control: 'boolean' },
    ellipsis: { control: 'boolean' },
    mark: { control: 'boolean' },
    italic: { control: 'boolean' },
    underline: { control: 'boolean' }
  },
  component: Title
}

export default meta

type Story = StoryObj<typeof Title>

export const Demo: Story = {
  args: {
    children: 'Typography',
    type: 'secondary',
    code: false,
    copyable: false,
    delete: false,
    disabled: false,
    editable: false,
    ellipsis: false,
    keyboard: false,
    mark: false,
    italic: false,
    underline: false
  }
}
