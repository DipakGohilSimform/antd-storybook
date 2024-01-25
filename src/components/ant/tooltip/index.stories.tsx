import type { Meta, StoryObj } from '@storybook/react'
import { Button } from 'antd'
import { Tooltip } from '.'

const meta: Meta<typeof Tooltip> = {
  title: 'Ant Design/Tooltip',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    arrow: { control: 'boolean' },
    autoAdjustOverflow: { control: 'boolean' },
    defaultOpen: { control: 'boolean' },
    destroyTooltipOnHide: { control: 'boolean' },
    fresh: { control: 'boolean' },
    trigger: {
      control: 'radio',
      options: ['hover', 'focus', 'click', 'contextMenu']
    }
  },
  component: Tooltip
}

export default meta

type Story = StoryObj<typeof Tooltip>

export const Demo: Story = {
  args: {
    arrow: false,
    autoAdjustOverflow: false,
    defaultOpen: false,
    destroyTooltipOnHide: false,
    fresh: false
  },
  render: (args) => (
    <Tooltip {...args} placement="topLeft" title="Tooltip">
      <Button style={{ width: 80 }}>Tooltip</Button>
    </Tooltip>
  )
}
