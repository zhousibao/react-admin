import React, { Component } from 'react'
import style from './index.module.less'
import Logo from '@/assets/logo-ant.svg'

export default class Header extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className={style.top}>
        <div className={style.left}>
          <img src={Logo} alt="logo"/>
          <p>管理后台系统</p>
        </div>
      </div>
    )
  }
}
