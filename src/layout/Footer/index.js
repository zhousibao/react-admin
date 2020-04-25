import React, { Component } from 'react'
import style from './index.module.less'
export default class Footer extends Component {
  render() {
    return (
      <div className={style.footer}>
        版权所有:(推荐使用谷歌浏览器，可以获得更佳操作页面体验)
      </div>
    )
  }
}
