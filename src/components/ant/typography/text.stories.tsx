import type { Meta, StoryObj } from '@storybook/react'
import { Text } from '.'

const meta: Meta<typeof Text> = {
  title: 'Ant Design/Typography/Text',
  parameters: {
    layout: 'centered'
  },
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
  component: Text
}

export default meta

type Story = StoryObj<typeof Text>

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
