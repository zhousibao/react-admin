import React from 'react'
import {Table, Button, Modal, message} from 'antd'
import {pagination} from '@/utils'
import {closeOrder} from '../api'

export default function OrderTable({loading,pagination:paginationParams,list,callback}){
  const columns = [
    {
      title:'订单编号',
      dataIndex:'order_sn',
      width:120,
      fixed:'left'
    },
    {
      title: '车辆编号',
      dataIndex: 'bike_sn',
      width:120
    },
    {
      title: '用户名',
      dataIndex: 'user_name',
      width:100
    },
    {
      title: '手机号',
      dataIndex: 'mobile',
      width:200
    },
    {
      title: '里程',
      dataIndex: 'distance',
      width:80,
      render(distance){
        return distance/1000 + 'Km';
      }
    },
    {
      title: '行驶时长',
      dataIndex: 'total_time',
      width:100
    },
    {
      title: '状态',
      dataIndex: 'status',
      width:80,
      render: (status) => status === 1 ? '进行中' : '已结束'
    },
    {
      title: '开始时间',
      dataIndex: 'start_time',
      width:200
    },
    {
      title: '结束时间',
      dataIndex: 'end_time',
      width:200
    },
    {
      title: '订单金额',
      dataIndex: 'total_fee',
      width:100
    },
    {
      title: '实付金额',
      dataIndex: 'user_pay',
      width:100
    },
    {
      title: '操作',
      width: 120,
      fixed:'right',
      render:(item)=> (
        <div>
          {item.status === 2 ? 
            <Button type="primary" size="small" onClick={() => goDetail(item)}>详情</Button>:
            <Button type="danger" size="small" onClick={() => closeConfirm(item)}>结束订单</Button>
          }
        </div>
      )
    }
  ]

  const changePage = (pageNum,pageSize) => callback('change',pageNum,pageSize)
  const goDetail = (item) => {
    const href = `/#/common/orderDetail/${item.id}`
    window.open(href)
  }
  const closeConfirm = (item) => {
    Modal.confirm({
      title:'确认？',
      content:'你确定要结束此订单吗？',
      maskClosable:true,
      okText:'确定',
      cancelText:'取消',
      onOk(){
        close(item)
      }
    })
  }
  const close = (item) => {
    const data = {
      id:item.id
    }
    closeOrder(data).then(res => {
      if(res.code === '0'){
        message.success(res.message)
        callback('close')
      }
    })
  }
    

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
      pagination={pagination({...paginationParams}, changePage)}
    />
  )
}