import type { Meta, StoryObj } from '@storybook/react'
import { Button } from 'antd'
import { Popover } from '.'

const meta: Meta<typeof Popover> = {
  title: 'Ant Design/Popover',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {},
  component: Popover
}

export default meta

type Story = StoryObj<typeof Popover>

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
)

export const Demo: Story = {
  args: {},
  render: () => (
    <Popover content={content} title="Title">
      <Button type="primary">Hover me</Button>
    </Popover>
  )
}
