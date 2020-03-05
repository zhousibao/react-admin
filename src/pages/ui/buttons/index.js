import React, { Component } from 'react'
import {Card, Button,Radio} from 'antd'
import {PlusOutlined, MinusOutlined,DownloadOutlined} from '@ant-design/icons'

import './index.less'
export default class Buttons extends Component {
  render() {
    return (
      <div>
        <Card title="基础按钮" style={{marginBottom:'20px'}}>
          <Button>default</Button>
          <Button disabled>disabled</Button>
          <Button type="primary">primary</Button>
          <Button type="primary" loading>primary loading</Button>
          <Button type="link">link</Button>
          <Button type="danger">danger</Button>
          <Button type="danger" ghost>danger ghost</Button>
          <Button shape="circle">circle</Button>
          <Button shape="round">round</Button>
          <Button type="dashed">dashed</Button>
          <Button size="small">small</Button>
        </Card>

        <Card title="图形按钮" style={{marginBottom:'20px'}}>
          <Button icon="primary">
            <PlusOutlined/>
            创建
          </Button>
          <Button icon="primary">
            删除
            <MinusOutlined />
          </Button>
          <Button type="primary">
            <DownloadOutlined />
          </Button>
          <Button type="primary" shape="circle">
            <DownloadOutlined />
          </Button>
          <Button type="primary" shape="round">
            <DownloadOutlined />
          </Button>
        </Card>

        <Card title="按钮组" style={{marginBottom:'20px'}}>
        <Radio.Group>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
        </Card>
        
      </div>
    )
  }
}