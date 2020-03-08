import React, { Component } from 'react'
import { Card, Modal, Button } from 'antd';

import './index.less'
export default class Modals extends Component {
  constructor(props){
    super(props)

    this.state = {
      visible:false
    }
  }
  open = () => {
    this.setState({
      visible:true
    })
  }
  close = () => {
    console.log('取消')
    this.setState({
      visible:false
    })
  }
  ok = () => {
    console.log('确认')
    this.setState({
      visible:false
    })
  }

  handleConfirm = (type)=>{
    Modal[type]({
      title:'确认？',
      content:'你确定你学会了React了吗？',
      onOk(){
        console.log('Ok')
      },
      onCancel(){
        console.log('Cancel')
      }
    })
  }

  render() {
    return (
      <div>
        <Card title="基础模态框" style={{marginBottom:'20px'}}>
          <Button type="primary" onClick={this.open}>Modal</Button>
        </Card>

        <Card title="信息确认框" style={{marginBottom:'20px'}}>
          <Button type="primary" onClick={() => this.handleConfirm('confirm')}>Confirm</Button>
          <Button type="primary" onClick={() => this.handleConfirm('info')}>Info</Button>
          <Button type="primary" onClick={() => this.handleConfirm('success')}>Success</Button>
          <Button type="primary" onClick={() => this.handleConfirm('warning')}>Warning</Button>
        </Card>

        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          okText="确认"
          cancelText="取消"
          style={{top:'20px'}}
          onOk={this.ok}
          onCancel={this.close}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
       
        
      </div>
    )
  }
}
