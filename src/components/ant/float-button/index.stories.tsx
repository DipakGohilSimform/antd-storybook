import type { Meta, StoryObj } from '@storybook/react'
import { FloatButton } from '.'

const meta: Meta<typeof FloatButton> = {
  title: 'Ant Design/FloatButton',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    icon: { control: HTMLElement },
    type: {
      control: 'radio',
      options: ['primary', 'default']
    },
    shape: { control: 'radio', options: ['circle', 'square'] }
  },
  component: FloatButton
}

export default meta

type Story = StoryObj<typeof FloatButton>

export const Demo: Story = {
  args: {
    children: 'FloatButton',
    type: 'primary'
  }
}
