import type { Meta, StoryObj } from '@storybook/react'
import { Button, message } from 'antd'
import { Message } from '.'

const meta: Meta<typeof Message> = {
  title: 'Ant Design/Message',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {},
  component: Message
}

export default meta

type Story = StoryObj<typeof Message>

export const Demo: Story = {
  args: {},
  render: () => {
    const [messageApi, contextHolder] = message.useMessage()

    const info = () => {
      messageApi.info('Hello, Ant Design!')
    }
    return (
      <>
        {contextHolder}
        <Button type="primary" onClick={info}>
          Display normal message
        </Button>
      </>
    )
  }
}
