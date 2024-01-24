import type { Meta, StoryObj } from '@storybook/react'
import { Menu } from '.'
import { CloseCircle } from '../../icons'

const meta: Meta<typeof Menu> = {
  title: 'Ant Design/Menu',
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    disabled: { control: 'boolean' }
  },
  component: Menu
}

export default meta

type Story = StoryObj<typeof Menu>

export const Demo: Story = {
  args: {
    items: [
      {
        key: '/dashboard',
        icon: <CloseCircle />,
        label: 'Dashboard'
      },
      {
        key: '/dashboard',
        icon: <CloseCircle />,
        label: 'Dashboard'
      },
      {
        key: '/dashboard',
        icon: <CloseCircle />,
        label: 'Dashboard'
      }
    ],
    placeholder: 'Select an option',
    disabled: false
  }
}
