import React, { Component } from 'react'
import menuConfig from '@/config/menuConfig'
import { Menu, Button } from 'antd';
const { SubMenu } = Menu;
import './index.less'

export default class NavLeft extends Component {

  // 菜单渲染
  renderMenu = (data) => {
    return data.map((item)=>{
      if(item.children){
        return (
          <SubMenu title={item.title} key={item.key}>
              { this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return (
        <Menu.Item title={item.title} key={item.key}>
          {item.title}
        </Menu.Item>
      )
    })
  }


  render() {
    const menuTreeNode = menuConfig
    return (
      <div>
        <div className="logo">
          <img src="/assets/logo-ant.svg" alt="logo"/>
          <p>管理后台系统</p>
        </div>
        <Menu
          defaultSelectedKeys={'/home'}
          mode="inline"
          theme="dark"
        >
          {this.renderMenu(menuTreeNode)}
        </Menu>
      </div>
    )
  }
}
