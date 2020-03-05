import React, { Component } from 'react'
import {Card, Form, Input, Button,Checkbox} from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
const FormItem = Form.Item  

import './index.less'

export default function Login() {
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 8
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 8,
    },
  };

  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
      <Card title="内联表单" style={{marginBottom:'20px'}}>
        <Form layout="inline">
          <FormItem>
            <Input placeholder="请输入用户名"/>
          </FormItem>
          <FormItem>
            <Input type="password" placeholder="请输入密码"/>
          </FormItem>
          <FormItem>
            <Button type="primary">登录</Button>
          </FormItem>
        </Form>
      </Card>

      <Card title="块级表单" style={{marginBottom:'20px'}}>
        <Form
          {...layout}
          initialValues={{
            remember:true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[
              {
                required: true,
                message: '请输入用户名!',
              },
            ]}
          >
            <Input prefix={<UserOutlined/>} placeholder="请输入用户名"/>
          </Form.Item>
          <Form.Item
            label="密码"
            name="password"
            rules={[
              {
                required: true,
                message: '请输入密码!',
              },
              {
                len:6,
                message: '请输入6位数密码'
              }
            ]}
          >
            <Input.Password 
              prefix={<LockOutlined/>} 
              type="password" 
              maxLength={6} 
              placeholder="请输入密码"
            />
          </Form.Item>
          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>记住账号</Checkbox>
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

