import React, { Component } from 'react'
import {Card, Button} from 'antd'
import RolesTable from './components/rolesTable'
import CreateRoles from './components/createRoles'


export default class Permission extends Component {
  constructor(props){
    super(props)
    this.state = {
      showCreateRoles:false
    }
  }
  rolesId:''

  openModal = (type) => {
    this.setState({
      [type]:true
    })
  }
  // 回调
  chooseRole = (id) => {
    this.rolesId = id
  }
  

  close = () => {
    this.setState({
      showCreateRoles:false
    })
  }
  render() {
    console.log('renden permission')
    return (
      <div>
        <Card>
          <Button type="primary" onClick={() => this.openModal('showCreateRoles')}>创建角色</Button>
          <Button type="primary" onClick={() => this.openModal('showCreateRoles')}>设置权限</Button>
          <Button type="primary" onClick={() => this.openModal('showCreateRoles')}>用户授权</Button>
        </Card>
        <Card>
          <RolesTable callback={this.chooseRole}/>
        </Card>


        <CreateRoles
          visible={this.state.showCreateRoles}
          callback={this.close}
        />
      </div>
    )
  }
}
