import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Storage from '@/utils/storage'

import { login } from '@/server/login'

import style from './index.module.less'
import logoImg from '@/assets/logo-ant.svg'

/**
 * @description 官方写法
 */
// const mapStateToProps = state => state.user
// const mapDispatchToProps = dispatch => ({
//   setToken: token => dispatch({ type: 'set_token', payload: token }),
//   setUserInfo: userInfo => dispatch({ type: 'set_userInfo', payload: userInfo }),
// })
// @connect(mapStateToProps, mapDispatchToProps)


/**
 * @description 完整写法
 */
// @connect(
//   state => state.user,
//   dispatch => ({
//     // 同步返回对象
//     setToken: (token) => dispatch({ type: 'set_token', payload: token }),
//     setUserInfo: (userInfo) => dispatch({ type: 'set_userInfo', payload: userInfo }),

//     // 异步返回函数
//     AsyncSetToken: token => dispatch => {
//       setTimeout(() => {
//         dispatch({ type: 'set_token', payload: token })
//       }, 1000)
//     },
//     // 因为异步返回的是一个函数，而不是action对象，所以出现了saga,实现将异步也返回一个action对象。
//   }),
// )


/**
 * @description 简洁写法
 */
@connect(
  state => ({ ...state.user, appName: state.app.appName }),
  {
    setToken: token => ({ type: 'set_token', payload: token }),
    setUserInfo: userInfo => ({ type: 'set_userInfo', payload: userInfo }),
  },
)
class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: 'zhousibao',
      password: '123456',
    }
    console.log('props', props)
  }

  onFinish = async(values) => {
    const { code, data } = await login(values)
    if(code === '0'){
      const { token, userInfo } = data

      Storage.setItem('token', token)
      Storage.setItem('userInfo', userInfo)
      this.props.setToken(token)
      this.props.setUserInfo(userInfo)

      message.success('登录成功', 1)
      this.props.history.push('/admin/home')
    }
  }


  render() {
    const { appName } = this.props
    return (
      <div className={style.login}>
        <div className={style.title}>
          <img src={logoImg} alt="logo"/>
          <p>{appName}</p>
        </div>

       
        <Form
          className={style.con}
          size="large"
          initialValues={{
            remember: true,
            ...this.state,
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
            <Button type="primary" htmlType="submit" className={style.btn}>登录</Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}
export default Login
