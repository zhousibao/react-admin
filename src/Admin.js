import React, { Component } from 'react'
import NavLeft from './components/NavLeft'
import Header from './components/Header'
import Footer from './components/Footer'
import './Admin.less'

export default class Admin extends Component {
  render() {
    return (
      <div className="admin">
        <div className="navleft">
          <NavLeft/>
        </div>
        <div className="admin-content">
          <Header/>
          <div className="content">
            content
          </div>
          <Footer/>
        </div>
      </div>
    )
  }
}
