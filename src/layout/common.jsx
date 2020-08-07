import React, { Component } from 'react'
import HeaderCommon from './HeaderCommon'
import style from './style.module.less'

export default class Common extends Component {
  render() {
    return (
      <div className={style.common}>
        <HeaderCommon/>
        <div className={style.common_content}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
