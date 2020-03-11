import React, { Component } from 'react'
import './index.less'

export default class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      systemName:'react-admin',
    }
  }
  render() {
    return (
      <div className="home">
        <p className="title">欢迎使用{this.state.systemName}管理系统</p>
        <img src="https://wpimg.wallstcn.com/0e03b7da-db9e-4819-ba10-9016ddfdaed3" alt="" className="img"/>
      </div>
    )
  }
}
