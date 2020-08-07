import React, { Component } from 'react'
import { Card, Button, Radio } from 'antd'
import { PlusOutlined, MinusOutlined, DownloadOutlined } from '@ant-design/icons'
export default class Buttons extends Component {
  render() {
    return (
      <div>
        <Card title="基础按钮" className="mb20">
          <Button className="mr20">default</Button>
          <Button disabled className="mr20">disabled</Button>
          <Button type="primary" className="mr20">primary</Button>
          <Button type="primary" loading className="mr20">primary loading</Button>
          <Button type="link" className="mr20">link</Button>
          <Button type="danger" className="mr20">danger</Button>
          <Button type="danger" ghost className="mr20">danger ghost</Button>
          <Button shape="circle" className="mr20">circle</Button>
          <Button shape="round" className="mr20">round</Button>
          <Button type="dashed" className="mr20">dashed</Button>
          <Button size="small" className="mr20">small</Button>
        </Card>

        <Card title="图形按钮" className="mb20">
          <Button type="primary" icon={<PlusOutlined/>} className="mr20">创建</Button>
          <Button type="primary" icon={<MinusOutlined/>} className="mr20">删除</Button>
          <Button type="primary" icon={<DownloadOutlined />} className="mr20" />
          <Button type="primary" icon={<DownloadOutlined />} shape="circle"className="mr20" />
          <Button type="primary" icon={<DownloadOutlined />} shape="round"className="mr20" />
        </Card>

        <Card title="按钮组" className="mb20">
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
