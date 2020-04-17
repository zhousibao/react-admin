import React, { Component } from 'react'
import { Card, Button, Modal } from 'antd'
import RolesTable from './components/rolesTable'
import CreateRoles from './components/createRoles'
import SetPermission from './components/setPermission'
import Authorization from './components/authorization'

export default class Permission extends Component {
  constructor(props){
    super(props)
    this.state = {
      showCreateRoles: false,
      showSetPermission: false,
      showAuthorization: false,
    }
  }

  rolesId = ''
  rolesName = ''
  

  openModal = (type) => {
    if(type === 'showCreateRoles'){
      this.setState({
        [type]: true,
      })
    }else{
      if(!this.rolesId){
        Modal.warning({
          title: '提醒',
          content: '请先选择角色',
          onOk(){
            // console.log('Ok')
          },
          onCancel(){
            // console.log('Cancel')
          },
        })
      } else {
        this.setState({
          [type]: true,
        })
      }
    }
    
  }
  // 回调
  chooseRole = (id, name) => {
    this.rolesId = id
    this.rolesName= name
  }
  

  close = (type) => {
    this.setState({
      showCreateRoles: false,
      showSetPermission: false,
      showAuthorization: false,
    })
    if(type){
      this.rolesId = ''
      this.rolesName= ''
    }
    
  }
  
  render() {
    return (
      <div>
        <Card>
          <Button type="primary" style={{ marginRight: '10px' }} onClick={() => this.openModal('showCreateRoles')}>创建角色</Button>
          <Button type="primary" style={{ marginRight: '10px' }} onClick={() => this.openModal('showSetPermission')}>设置权限</Button>
          <Button type="primary" onClick={() => this.openModal('showAuthorization')}>用户授权</Button>
        </Card>
        <Card>
          <RolesTable callback={this.chooseRole}/>
        </Card>


        <CreateRoles
          visible={this.state.showCreateRoles}
          callback={this.close}
        />
        {
          this.state.showSetPermission ? (<SetPermission
            visible={this.state.showSetPermission}
            rolesId={this.rolesId}
            rolesName ={this.rolesName}
            callback={this.close}
          />):null
        }
        {
          this.state.showAuthorization ? (<Authorization
            visible={this.state.showAuthorization}
            rolesId={this.rolesId}
            rolesName ={this.rolesName}
            callback={this.close}
          />):null
        }
        
      </div>
    )
  }
}
