import React, { Component } from 'react'
import style from './index.module.less'
import { Button } from 'antd'
import { LogoutOutlined } from '@ant-design/icons';
import { formatDate } from '@/utils'
import Logo from '@/assets/logo-ant.svg'

export default class Header extends Component {
  constructor(props){
    super(props)
    this.state = {
      date: '',
      useName: '超级管理员',
    }
  }
  componentDidMount(){
    this.timerId = setInterval(() => {
      this.setState({
        date: formatDate(new Date()),
      })
    }, 1000)

  }
  componentWillUnmount(){
    clearInterval(this.timerId)
  }

  render() {
    return (
      <div className={style.top}>
        <div className={style.left}>
          <img src={Logo} alt="logo"/>
          <p>管理后台系统</p>
        </div>
        <div className={style.right}>
          <div className={style.date}>{this.state.date}</div>
          <div className={style.name}>{this.state.useName}</div>
          <Button type="danger" shape="circle" size="small">
            <LogoutOutlined />
          </Button>
        </div>
      </div>
    )
  }
}
