import React from 'react'
import {Card, Table, Form, Input, Select, Button} from 'antd'
import { SearchOutlined } from '@ant-design/icons'
const { Option } = Select

export default function SearchForm({callback,...rest}){
  const [form] = Form.useForm();

  const onFinish = (values) => {
    callback(values)
  }
  const onReset = () => {
    form.resetFields();
  };

  return (
    <Form
      form={form} 
      layout="inline"
      initialValues={{
        ...rest
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="cityId"
      >
        <Select allowClear placeholder="城市" style={{ width: 120 }}>
          <Option value={1}>北京市</Option>
          <Option value={2}>上海市</Option>
          <Option value={3}>天津市</Option>
          <Option value={4}>深圳市</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="mode"
      >
        <Select allowClear placeholder="用车模式" style={{ width: 160 }}>
          <Option value={1}>指定停车点模式</Option>
          <Option value={2}>禁停区模式</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="op_mode"
      >
        <Select allowClear placeholder="运营模式" style={{ width: 120 }}>
          <Option value={1}>自营</Option>
          <Option value={2}>加盟</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="auth_status"
      >
        <Select allowClear placeholder="授权状态" style={{ width: 120 }}>
          <Option value={1}>已授权</Option>
          <Option value={2}>未授权</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="search"
      >
        <Input.Search
          placeholder="搜索"
          style={{ width: 200 }}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" icon={<SearchOutlined/>}>搜索</Button>
        <Button onClick={onReset}>重置</Button>
      </Form.Item>
    </Form>
  )
}