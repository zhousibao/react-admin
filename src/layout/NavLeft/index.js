import React, { Component } from 'react'
import menuConfig from '../menu'
import { Menu, Button } from 'antd';
import {NavLink} from 'react-router-dom'
import './index.less'

export default class NavLeft extends Component {

  // 菜单渲染
  renderMenu = (data) => {
    return data.map((item)=>{
      if(item.children){
        return (
          <Menu.SubMenu title={item.title} key={item.key}>
              { this.renderMenu(item.children)}
          </Menu.SubMenu>
        )
      }
      return (
        <Menu.Item title={item.title} key={item.key}>
          <NavLink to={item.key}>{item.title}</NavLink>
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
