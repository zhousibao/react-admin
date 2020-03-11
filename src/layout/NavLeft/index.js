import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import menuConfig from '../menu'
import { Menu } from 'antd';
import { 
  HomeOutlined,
  AppstoreOutlined,
  FormOutlined,
  TableOutlined,
  ApartmentOutlined,
  ProfileOutlined,
  DashboardOutlined,
  BarChartOutlined,
  PieChartOutlined,
  LineChartOutlined,
  EditOutlined,
  KeyOutlined,
} from '@ant-design/icons'
import {NavLink} from 'react-router-dom'

@connect(
  null,
  {
    changeMenuTitle:(title) => ({type:'changeMenuTitle', payload:title}),
  },
)
class NavLeft extends PureComponent {
  constructor(props){
    super(props)
    
    this.state = {
      openKeys:[],
      defaultSelectedKeys:[window.location.hash.replace(/#|\?.*$/g, '')],
    }
    
  }

  showIcon = (name) => {
    switch (name){
    case 'home':
      return <HomeOutlined/>
    case 'components':
      return <AppstoreOutlined/>
    case 'form':
      return <FormOutlined />
    case 'table':
      return <TableOutlined />
    case 'city':
      return <ApartmentOutlined />
    case 'order':
      return <ProfileOutlined />
    case 'dashboard':
      return <DashboardOutlined />
    case 'bar':
      return <BarChartOutlined />
    case 'pie':
      return <PieChartOutlined />
    case 'line':
      return <LineChartOutlined />
    case 'edit':
      return <EditOutlined />
    case 'permission':
      return <KeyOutlined />


    default:
      return null

    }
  }
  

  // 菜单渲染
  renderMenu = (data) => {
    return data.map((item)=>{
      if(item.children){
        return (
          <Menu.SubMenu 
            title={
              <span>
                {this.showIcon(item.icon)}
                <span>{item.title}</span>
              </span>
            }
            key={item.key}
          >
            { this.renderMenu(item.children)}
          </Menu.SubMenu>
        )
      }
      return (
        <Menu.Item title={item.title} key={item.key}>
          {this.showIcon(item.icon)}
          <NavLink to={item.key}>{item.title}</NavLink>
        </Menu.Item>
      )
    })
  }

  // 打开父菜单 // 仅展开一个菜单
  onOpenChange = (openKeys) => {
    if(!openKeys.length){
      this.setState({
        openKeys:[],
      })
    } else{
      const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
      this.setState({
        openKeys:[latestOpenKey],
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
      <Menu
        defaultSelectedKeys={this.state.defaultSelectedKeys}
        mode="inline"
        theme="dark"
        openKeys={this.state.openKeys}
        onOpenChange={this.onOpenChange}
        onSelect={this.onSelect}
        className="menu"
      >
        {this.renderMenu(menuTreeNode)}
      </Menu>
     
    )
  }
}
export default NavLeft 