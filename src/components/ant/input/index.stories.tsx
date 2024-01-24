import type { Meta, StoryObj } from '@storybook/react'
import { Input } from '.'

const meta: Meta<typeof Input> = {
  title: 'Ant Design/Input',
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    size: { control: 'radio', options: ['large', 'small', 'medium'] },
    variant: {
      control: 'radio',
      options: ['outlined', 'borderless', 'filled']
    },
    disabled: { control: 'boolean' }
  },
  component: Input
}

export default meta

type Story = StoryObj<typeof Input>

export const Demo: Story = {
  args: {
    type: 'primary',
    size: 'large',
    placeholder: 'Input',
    disabled: false
  }
}
