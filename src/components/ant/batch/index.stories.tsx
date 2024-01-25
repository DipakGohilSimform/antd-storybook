import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from 'antd'
import { Badge } from '.'

const meta: Meta<typeof Badge> = {
  title: 'Ant Design/Badge',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    size: { control: 'radio', options: ['default', 'small'] },
    status: {
      control: 'radio',
      options: ['success', 'processing', 'default', 'error', 'warning']
    },
    dot: { control: 'boolean' },
    showZero: { control: 'boolean' }
  },
  component: Badge
}

export default meta

type Story = StoryObj<typeof Badge>

export const Demo: Story = {
  args: {
    children: (
      <Badge>
        <Avatar />
      </Badge>
    ),
    count: 5,
    dot: false,
    showZero: false
  }
}
