import type { Meta, StoryObj } from '@storybook/react'
import { Slider } from '.'

const meta: Meta<typeof Slider> = {
  title: 'Ant Design/Slider',

  argTypes: {
    autoFocus: { control: 'boolean' },
    disabled: { control: 'boolean' },
    keyboard: { control: 'boolean' },
    dots: { control: 'boolean' },
    included: { control: 'boolean' },
    range: { control: 'boolean' },
    reverse: { control: 'boolean' },
    vertical: { control: 'boolean' }
  },
  component: Slider
}

export default meta

type Story = StoryObj<typeof Slider>

export const Demo: Story = {
  args: {
    autoFocus: false,
    disabled: false,
    keyboard: false,
    dots: false,
    included: false,
    range: false,
    reverse: false,
    vertical: false
  }
}
