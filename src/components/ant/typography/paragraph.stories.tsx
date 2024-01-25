import type { Meta, StoryObj } from '@storybook/react'
import { Paragraph } from '.'

const meta: Meta<typeof Paragraph> = {
  title: 'Ant Design/Typography/Paragraph',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'radio',
      options: ['secondary', 'success', 'warning', 'danger']
    },

    code: { control: 'boolean' },
    copyable: { control: 'boolean' },
    delete: { control: 'boolean' },
    disabled: { control: 'boolean' },
    editable: { control: 'boolean' },
    keyboard: { control: 'boolean' },
    mark: { control: 'boolean' },
    strong: { control: 'boolean' },
    italic: { control: 'boolean' },
    underline: { control: 'boolean' }
  },
  component: Paragraph
}

export default meta

type Story = StoryObj<typeof Paragraph>

export const Demo: Story = {
  args: {
    children: 'Typography',
    type: 'secondary',
    disabled: false,
    code: false,
    copyable: false,
    delete: false,
    editable: false,
    keyboard: false,
    mark: false,
    strong: false,
    italic: false,
    underline: false
  }
}
