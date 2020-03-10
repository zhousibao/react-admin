import React ,{PureComponent} from 'react'
import { Table } from 'antd'
import { rolesList } from '../api'
import { formatDate } from '@/utils'
import emitter from '@/utils/eventBus';

export default class  RolesTable extends PureComponent{
  constructor(props){
    super(props)

    this.state ={
      list:[],
      loading:false
    }
  } 
  
  componentDidMount(){
    this.getRolesList()

    this.eventEmitter = emitter.addListener('reloadRolesTable', () => {
      this.getRolesList()
    });

  }
  componentWillUnmount() {
    emitter.removeListener(this.eventEmitter);
  }

  
  getRolesList  = () => {
    this.setState({
      loading:true
    })

    rolesList().then(res => {
      if(res.code === '0'){
        this.setState({
          list:res.data.list,
          loading:false
        })
      }
    }).catch(err => {
      this.setState({
        loading:false
      })
    })
    
  }
    
  render(){
    const rowSelection = {
      type: 'radio',
      onSelect: (item) => {
        this.props.callback(item.id)
      }
    };


    const columns = [
      {
        title: '角色ID',
        dataIndex: 'id'
      }, 
      {
        title: '角色名称',
        dataIndex: 'role_name'
      },
      {
        title: '创建时间',
        dataIndex: 'create_time',
        render: create_time => formatDate(create_time)
      }, 
      {
        title: '使用状态',
        dataIndex: 'status',
        render: status => status === 1 ? "启用":"关闭" 
      }, 
      {
        title: '授权时间',
        dataIndex: 'authorize_time',
        render: authorize_time => formatDate(authorize_time)
      }, 
      {
        title: '授权人',
        dataIndex: 'authorize_user_name'
      }
    ];
    return (
      <Table
        loading={this.state.loading}
        bordered
        scroll={{
          x:true,
          y:400
        }}
        columns={columns}
        dataSource={this.state.list}
        rowSelection={rowSelection}
        pagination={false}
      />
    )
  }
  
}