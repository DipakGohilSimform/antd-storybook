import type { Meta, StoryObj } from '@storybook/react'
import { Divider } from '.'

const meta: Meta<typeof Divider> = {
  title: 'Ant Design/Divider',
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'radio',
      options: ['horizontal', 'vertical']
    },
    orientation: {
      control: 'radio',
      options: ['left', 'right', 'center']
    },
    dashed: { control: 'boolean' },
    plain: { control: 'boolean' }
  },
  component: Divider
}

export default meta

type Story = StoryObj<typeof Divider>

export const Demo: Story = {
  args: {
    children: 'Divider',
    type: 'horizontal',
    dashed: false,
    plain: false
  }
}
