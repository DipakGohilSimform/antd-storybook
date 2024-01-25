import type { Meta } from '@storybook/react'
import { Button } from 'antd'
import React from 'react'
import { Affix } from '.'

const meta: Meta<typeof Affix> = {
  title: 'Ant Design/Affix',
  tags: ['autodocs'],
  argTypes: {},
  component: Affix
}

export default meta

export function Demo() {
  const [top, setTop] = React.useState<number>(100)

  return (
    <Affix offsetTop={top}>
      <Button type="primary" onClick={() => setTop(top + 10)}>
        Affix top
      </Button>
    </Affix>
  )
}
