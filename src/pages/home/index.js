import React, { Component } from 'react'
import './index.less'

export default class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      systemName: 'react-admin',
    }
  }
  handleC = (event) => {
    console.log(event)
    console.log(event.target)
    console.log(event.currentTarget)

    console.log(event.nativeEvent)
    console.log(event.nativeEvent.target)
    console.log(event.nativeEvent.currentTarget)


  }
  render() {
    return (
      <div className="home">
        <p className="title" onClick={(e) => this.handleC(e)}>欢迎使用{this.state.systemName}管理系统</p>
        <img src="https://wpimg.wallstcn.com/0e03b7da-db9e-4819-ba10-9016ddfdaed3" alt="" className="img"/>
      </div>
    )
  }
}
