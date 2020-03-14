import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Layout } from 'antd';
import NavLeft from './NavLeft'
import Header from './Header'
import Footer from './Footer'
import './index.less'
const { Sider } = Layout;


@connect(
  state => ({app:state.app}),
)
class Admin extends Component {
  render() {
    return (
      <Layout className="admin">
        <Sider trigger={null} collapsible collapsed={this.props.app.collapsed} className="admin-sider">
          <div className="logo">
            <img src="/assets/logo-ant.svg" alt="logo"/>
            {
              !this.props.app.collapsed && (<p>管理后台系统</p>)
            }
          </div>
          <NavLeft/>
        </Sider>
        <Layout className="site-layout">
          <Header/>
          <div className="admin-content">
            {this.props.children}
          </div>
          <Footer/>
        </Layout>
      </Layout>
    )
  }
}
export default Admin
