import React, { Component } from 'react'
import { Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { login } from './aip'
import style from './index.module.less'
import Logo from '@/assets/logo-ant.svg'

export default class Login extends Component {

  onFinish = values => {
    login(values).then(res => {
      if(res.code === '0'){
        message.success(res.message)
        console.log('token:', res.data.token)
        this.props.history.push('/admin/home')
      }
    })
  };


  render() {
    return (
      <div className={style.login}>
        <div className={style.login_title}>
          <div className={style.con}>
            <img src={Logo} alt="logo"/>
            <p>管理后台系统</p>
          </div>
        </div>


        <div className={style.login_form}>
          <Form
            className={style.form_con}
            size="large"
            initialValues={{
              remember: true,
            }}
            onFinish={this.onFinish}
          >
            <Form.Item
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
              name="password"
              rules={[
                {
                  required: true,
                  message: '请输入密码!',
                },
                {
                  len: 6,
                  message: '请输入6位数密码',
                },
              ]}
            >
              <Input.Password 
                prefix={<LockOutlined/>} 
                type="password" 
                maxLength={6} 
                placeholder="请输入密码"
              />
            </Form.Item>
            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>记住账号</Checkbox>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className={style.login_form_button}>
              登录
              </Button>
            </Form.Item>
          </Form>
        </div>
        
          
      </div>
    )
  }
}
