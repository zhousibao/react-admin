import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Layout } from 'antd';
import NavLeft from './NavLeft'
import Header from './Header'
import Footer from './Footer'
import style from './style.module.less'
const { Sider } = Layout;


@connect(
  state => ({ app: state.app }),
)
class Admin extends Component {
  render() {
    return (
      <Layout className={style.admin}>
        <Sider trigger={null} collapsible collapsed={this.props.app.collapsed} className={style.admin_sider}>
          <div className={style.logo}>
            <img src="/assets/logo-ant.svg" alt="logo"/>
            {
              !this.props.app.collapsed && (<p>管理后台系统</p>)
            }
          </div>
          <NavLeft/>
        </Sider>
        <Layout className={style.site_layout}>
          <Header/>
          <div className={style.admin_content}>
            {this.props.children}
          </div>
          <Footer/>
        </Layout>
      </Layout>
    )
  }
}
export default Admin
