import React, { useState, useEffect } from 'react'
import { Card, Table } from 'antd'
import { tableList } from '@/server/table'

export default function Selection(){

  const [list, setList] = useState([])
  const [selectedRowKeys, setSelectedRowKeys] = useState([1])

  useEffect(() => {
    tableList().then(res => {
      if(res.code === '0'){
        setList(res.data.list)
      }
    })
  }, [])


  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      align: 'center',
    },
    {
      title: '年龄',
      dataIndex: 'age',
    },
    {
      title: '性别',
      dataIndex: 'sex',
      render: sex => sex === 1 ? '男':'女',
    },
  ]

  const pagination = {
    pageSize: 5,
    showTotal: total => `共 ${total} 条`,
  }

  const rowSelection = {
    type: 'radio',
    onSelect: (item) => {
      console.log('选择项:', item);
    },
  };

  const rowSelection1 = {
    type: 'checkbox',
    selectedRowKeys,
    onChange: (selectedRowKeys, selectedRows) => {
      console.log('共选择:', selectedRows);
    },
    onSelectAll: (selected, selectedRows) => {
      const arr = []
      if(selected){
        selectedRows.map(item => arr.push(item.key))
      }
      setSelectedRowKeys(arr)
    },
  };

  const onRow = (item) => ({
    onClick: event => {
      if(selectedRowKeys.includes(item.key)){
        const arr = selectedRowKeys.filter(i => i !== item.key)
        setSelectedRowKeys(arr)
      } else {
        setSelectedRowKeys([...selectedRowKeys, item.key])
      }
    },
  })
  
  return (
    <div>
      <Card title="单选表格">
        <Table
          dataSource={list}
          columns={columns}
          pagination={pagination}
          rowSelection={rowSelection}
        />
      </Card>

      <Card title="多选表格">
        <Table
          dataSource={list}
          columns={columns}
          pagination={pagination}
          rowSelection={rowSelection1}
          onRow={onRow}
        />
      </Card>
    </div>
  )
  
}
