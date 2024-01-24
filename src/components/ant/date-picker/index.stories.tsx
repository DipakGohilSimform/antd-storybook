import type { Meta, StoryObj } from '@storybook/react'
import { DatePicker } from '.'

const meta: Meta<typeof DatePicker> = {
  title: 'Ant Design/DatePicker',
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    format: { control: 'radio', options: ['rgb', 'hex', 'hsb'] },
    size: { control: 'radio', options: ['large', 'middle', 'small'] },
    disabled: { control: 'boolean' },
    allowClear: { control: 'boolean' }
  },
  component: DatePicker
}

export default meta

type Story = StoryObj<typeof DatePicker>

export const Demo: Story = {
  args: {
    disabled: false,
    allowClear: false
  }
}
