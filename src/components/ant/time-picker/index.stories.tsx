import type { Meta, StoryObj } from '@storybook/react'
import { TimePicker } from '.'

const meta: Meta<typeof TimePicker> = {
  title: 'Ant Design/TimePicker',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'radio', options: ['large', 'middle', 'small'] },
    status: {
      control: 'radio',
      options: ['error', 'warning', 'success', 'validating']
    },
    variant: {
      control: 'radio',
      options: ['outlined', 'borderless', 'filled']
    },
    allowClear: { control: 'boolean' },
    autoFocus: { control: 'boolean' },
    changeOnBlur: { control: 'boolean' },
    disabled: { control: 'boolean' },
    hideDisabledOptions: { control: 'boolean' },
    inputReadOnly: { control: 'boolean' },
    showNow: { control: 'boolean' },
    use12Hours: { control: 'boolean' }
  },
  component: TimePicker
}

export default meta

type Story = StoryObj<typeof TimePicker>

export const Demo: Story = {
  args: {
    allowClear: false,
    autoFocus: false,
    changeOnBlur: false,
    disabled: false,
    hideDisabledOptions: false,
    inputReadOnly: false,
    showNow: false,
    use12Hours: false
  }
}
