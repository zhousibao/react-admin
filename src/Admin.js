import React, { Component } from 'react'
import {Row, Col} from 'antd'
import NavLeft from './components/NavLeft'
import Header from './components/Header'
import Footer from './components/Footer'
import './Admin.less'

export default class Admin extends Component {
  render() {
    return (
      <Row className="admin">
        <Col span={3} className="navleft">
          <NavLeft/>
        </Col>
        <Col span={21}>
          <Header/>
          <Row>
            content
          </Row>
          <Footer/>
        </Col>
      </Row>
    )
  }
}
