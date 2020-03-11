import React from 'react'
import {Form, Input, DatePicker, Select, Button} from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import moment from 'moment'
const { Option } = Select

export default function SearchForm({callback, ...rest}){
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
        ...rest,
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
        name="time"
      >
        <DatePicker.RangePicker 
          format="YYYY-MM-DD HH:mm:ss"
          showTime={{
            disabled: true,
            defaultValue: [moment('00:00:00', 'HH:mm:ss'), moment('23:59:59', 'HH:mm:ss')],
          }}
        />
      </Form.Item>
      <Form.Item
        name="status"
      >
        <Select allowClear placeholder="状态" style={{ width: 120 }}>
          <Option value={1}>进行中</Option>
          <Option value={2}>已结束</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="search"
      >
        <Input.Search
          placeholder="搜索"
          style={{ width: 160 }}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" icon={<SearchOutlined/>}>搜索</Button>
        <Button onClick={onReset}>重置</Button>
      </Form.Item>
    </Form>
  )
}