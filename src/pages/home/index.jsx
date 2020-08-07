import React, { Component } from 'react'
import { APP_NAME, APP_ENV } from '@/config'

import style from './index.module.less'

export default class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      appName: APP_NAME,
      env: APP_ENV,
      val: 0,
    }
  }

  componentDidMount() {
    this.setState({ val: this.state.val + 1 })
    console.log('a', this.state.val)

    this.setState({ val: this.state.val + 1 })
    console.log('b', this.state.val)

    setTimeout(() => {
      this.setState({ val: this.state.val + 1 })
      console.log('c', this.state.val);

      this.setState({ val: this.state.val + 1 })
      console.log('d', this.state.val)
    }, 0)
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
      <div className={style.home}>
        <h3 className={style.title} onClick={(e) => this.handleC(e)}>欢迎使用{this.state.appName}管理系统
        </h3>
        <div className={style.env}>{this.state.env}</div>
        <img src="https://wpimg.wallstcn.com/0e03b7da-db9e-4819-ba10-9016ddfdaed3" alt="" className={style.img}/>
      </div>
    )
  }
}
