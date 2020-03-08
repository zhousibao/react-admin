import React, { Component } from 'react'
import './index.less'
import { Button } from 'antd'
import { LogoutOutlined } from '@ant-design/icons';
import { formatDate } from '@/utils'

export default class Header extends Component {
  constructor(props){
    super(props)
    this.state = {
      date:'',
      useName:'超级管理员'
    }
  }
  componentDidMount(){
    this.timerId = setInterval(() => {
      this.setState({
        date:formatDate(new Date())
      })
    },1000)

  }
  componentWillUnmount(){
    clearInterval(this.timerId)
  }

  render() {
    return (
      <div className="top">
        <div className="left">
          <img src="/assets/logo-ant.svg" alt="logo"/>
          <p>管理后台系统</p>
        </div>
        <div className="right">
          <div className="date">{this.state.date}</div>
          <div className="name">{this.state.useName}</div>
          <Button type="danger" shape="circle" size="small">
            <LogoutOutlined />
          </Button>
        </div>
      </div>
    )
  }
}
