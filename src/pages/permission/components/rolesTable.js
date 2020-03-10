import React, {useState, useEffect} from 'react'
import { Table } from 'antd'
import { rolesList } from '../api'
import { formatDate } from '@/utils'
import emitter from '@/utils/eventBus';

export default function RolesTable({callback}){
  const [list,setList] = useState([])
  const [loading,setLoading] = useState(false)
  const [selectedRowKeys,setSelectedRowKeys] = useState([])

  useEffect(() => {
    getRolesList()
    const eventEmitter = emitter.addListener('reloadRolesTable', () => {
      getRolesList()
    });

    return () => {
      emitter.removeListener(eventEmitter);
    } 
  },[])

  
  const getRolesList = () => {
    setLoading(true)

    rolesList().then(res => {
      if(res.code === '0'){
        setList(res.data.list)
        setLoading(false)
        setSelectedRowKeys([])
      }
    }).catch(err => {
      setLoading(false)
    })
  }

  const rowSelection = {
    type: 'radio',
    selectedRowKeys,
    onSelect: (item) => {
      callback(item.id, item.role_name)
      setSelectedRowKeys([item.key])
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
      loading={loading}
      bordered
      scroll={{
        x:true,
        y:400
      }}
      columns={columns}
      dataSource={list}
      rowSelection={rowSelection}
      pagination={false}
    />
  )
  
}