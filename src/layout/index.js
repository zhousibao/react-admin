import React, { Component } from 'react'
import NavLeft from './NavLeft'
import Header from './Header'
import Footer from './Footer'
import './index.less'

export default class Layout extends Component {
  render() {
    return (
      <div className="admin">
        <div className="navleft">
          <NavLeft/>
        </div>
        <div className="admin-content">
          <Header/>
          <div className="content">
            {this.props.children}
          </div>
          <Footer/>
        </div>
      </div>
    )
  }
}
