import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import menuConfig from '../menu'
import { Menu } from 'antd';
import {NavLink} from 'react-router-dom'
import './index.less'

@connect(
  null,
  {
    changeMenuTitle:(title) => ({type:'changeMenuTitle', payload:title})
  }
)
class NavLeft extends PureComponent {
  constructor(props){
    super(props)
    
    this.state = {
      openKeys:[],
      defaultSelectedKeys:[window.location.hash.replace(/#|\?.*$/g,'')]
    }
  }
  

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

  // 打开父菜单 // 仅展开一个菜单
  onOpenChange = (openKeys) => {
    if(!openKeys.length){
      this.setState({
        openKeys:[]
      })
    } else{
      const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
      this.setState({
        openKeys:[latestOpenKey]
      })
    }
  }

  onSelect = ({item}) => {
    // console.log(item.props.title)
    this.props.changeMenuTitle(item.props.title)
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
          defaultSelectedKeys={this.state.defaultSelectedKeys}
          mode="inline"
          theme="dark"
          openKeys={this.state.openKeys}
          onOpenChange={this.onOpenChange}
          onSelect={this.onSelect}
        >
          {this.renderMenu(menuTreeNode)}
        </Menu>
      </div>
    )
  }
}
export default NavLeft 