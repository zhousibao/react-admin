import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { Dropdown, Menu } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined, LoginOutlined } from '@ant-design/icons';
import { formatDate } from '@/utils'

import style from './index.module.less'

@withRouter
@connect(
  state => ({ app: state.app }),
  {
    toggleCollapsed: () => ({ type: 'toggleCollapsed' }),
  },
)
class Header extends Component {
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


  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  // 退出登录
  logout = () => {
    this.props.history.push('/login')
  }

  
  render() {
    const menu = (
      <Menu>
        <Menu.Item onClick={this.logout}>
          <LoginOutlined /> 退出登录
        </Menu.Item>
      </Menu>
    )
    return (
      <div className={style.header}>
        <div className={style.left}>
          {
            this.props.app.collapsed ? 
              (<MenuUnfoldOutlined className={style.left_icon} onClick={this.props.toggleCollapsed}/>) : (<MenuFoldOutlined className={style.left_icon}  onClick={this.props.toggleCollapsed}/>)
          }
          <div className={style.menu_title}>
            {this.props.app.menuTitle}
          </div>
          
        </div>
            
        <div className={style.right}>
          <div className={style.date}>{this.state.date}</div>
         
          <Dropdown overlay={menu}>
            <div className={style.user}>
              <img src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png" alt="avatar"/>
              <span>{this.state.useName}</span>
            </div>
          </Dropdown>
        </div>
      </div>
    )
  }
}
export default Header
