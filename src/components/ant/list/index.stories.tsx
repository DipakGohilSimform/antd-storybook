import type { Meta, StoryObj } from '@storybook/react'
import { Typography } from 'antd'
import { List } from '.'

const meta: Meta<typeof List> = {
  title: 'Ant Design/List',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    bordered: { control: 'boolean' },
    itemLayout: { control: 'radio', options: ['horizontal', 'vertical'] },
    pagination: { control: 'boolean' },
    split: { control: 'boolean' }
  },
  component: List
}

export default meta

type Story = StoryObj<typeof List>

const data: React.ReactNode[] = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.'
]

export const Demo: Story = {
  args: {
    bordered: true,
    pagination: false,
    split: false
  },
  render: (args) => (
    <List
      {...args}
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={data}
      renderItem={(item: React.ReactNode) => (
        <List.Item>
          <Typography.Text mark>[ITEM]</Typography.Text> {item}
        </List.Item>
      )}
    />
  )
}
