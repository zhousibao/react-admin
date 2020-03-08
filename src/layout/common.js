import React, { Component } from 'react'
import HeaderCommon from './HeaderCommon'
import './index.less'

export default class Common extends Component {
  render() {
    return (
      <div className="common">
        <HeaderCommon/>
        <div className="common-content">
          {this.props.children}
        </div>
      </div>
    )
  }
}
