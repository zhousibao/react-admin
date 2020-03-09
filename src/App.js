import React, { Component } from 'react'
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
// 国际化

export default class App extends Component {
  render() {
    return (
      <ConfigProvider locale={zhCN}>
        {this.props.children}
      </ConfigProvider>
    )
  }
}
