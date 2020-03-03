import React, { Component } from 'react'
import './index.less'
import { Button } from 'antd'
import { LogoutOutlined } from '@ant-design/icons';

export default class Header extends Component {
  constructor(props){
    super(props)
    this.state = {
      useName:'超级管理员'
    }
  }
  render() {
    return (
      <div className="header">
        <div className="left">
        导航栏
        </div>
        <div className="right">
          <div className="name">{this.state.useName}</div>
          <Button type="danger" shape="circle" size="small">
            <LogoutOutlined />
          </Button>
        </div>
      </div>
    )
  }
}
