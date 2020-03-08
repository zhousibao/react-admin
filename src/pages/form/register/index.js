import React from 'react'
import {PlusOutlined} from '@ant-design/icons'
import locale from 'antd/es/date-picker/locale/zh_CN';
import moment from 'moment';
import { formatDate } from '@/utils'
import './index.less'
import {
  Card,
  Form,
  Input,
  InputNumber,
  Button,
  Radio,
  Checkbox,
  Select,
  Switch,
  DatePicker,
  Upload
} from 'antd'
const { Option } = Select;
const { RangePicker } = DatePicker;


export default function Register() {
  const hobbyList = ['篮球','游泳','泡妹子','打游戏','看书','聊天','睡觉']
  const layout = {
    labelCol: {
      span: 8
    },
    wrapperCol: {
      span: 12
    }
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 12
    }
  };

  
  // 头像上传
  const normFile = e => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };


  const onFinish = values => {
    console.log('Success:', values);
    console.log('birthday:', formatDate(values.birthday));
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };


  return (
    <div>
      <Card title="注册表单" style={{marginBottom:'20px'}}>
        <Form
          {...layout}
          size="middle"
          initialValues={{
            username:'张三',
            password: '123456',
            sex:1,
            age:20,
            state:1,
            like:['篮球','打游戏'],
            marry:false,
            birthday:moment('2008-08-08', 'YYYY-MM-DD'),
            workTime:[],
            address:'',
            agree:true
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
                message: '请输入用户名!'
              }
            ]}
          >
            <Input placeholder="请输入用户名"/>
          </Form.Item>
          <Form.Item
            label="密码"
            name="password"
            rules={[
              {
                required: true,
                message: '请输入密码!'
              },
              {
                len:6,
                message: '请输入6位数密码'
              }
            ]}
          >
            <Input.Password 
              type="password" 
              maxLength={6} 
              placeholder="请输入密码"
            />
          </Form.Item>
          <Form.Item
            label="性别"
            name="sex"
            rules={[
              {
                required: true,
                message: '请选择性别!'
              }
            ]}
          >
            <Radio.Group>
              <Radio value={1}>男</Radio>
              <Radio value={2}>女</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="年龄"
            name="age"
          >
            <InputNumber min={15} max={100}/>
          </Form.Item>
          <Form.Item
            label="当前状态"
            name="state"
          >
            <Select style={{ width: 120 }}>
              <Option value={1}>风华浪子</Option>
              <Option value={2}>咸鱼一条</Option>
              <Option value={3}>技术大佬</Option>
              <Option value={4} disabled>
                已挂
              </Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="爱好"
            name="like"
          >
            <Select mode="multiple">
              {
                hobbyList.map(item => 
                  <Option value={item} key={item}>{item}</Option>
                )
              }
            </Select>
          </Form.Item>
          <Form.Item
            label="是否结婚"
            name="marry"
            valuePropName="checked"
          >
            <Switch checkedChildren="已婚" unCheckedChildren="未婚"/>
          </Form.Item>
          <Form.Item
            label="生日"
            name="birthday"
          >
            <DatePicker locale={locale} showTime format="YYYY-MM-DD HH:mm:ss" placeholder="请选择日期"/>
          </Form.Item>
          <Form.Item
            label="工龄"
            name="workTime"
          >
            <RangePicker locale={locale} showTime/>
          </Form.Item>
          <Form.Item
            label="详细地址"
            name="address"
            
          >
            <Input.TextArea autoSize={{ minRows: 3, maxRows: 6 }} placeholder="请输入联系地址"/>
          </Form.Item>

          <Form.Item
            label="头像"
            name="photo"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload
              listType="picture-card"
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            >
              <PlusOutlined />
            </Upload>
          </Form.Item>

          <Form.Item
            {...tailLayout}
            name="agree"
            valuePropName="checked"
          >
            <Checkbox>同意条款</Checkbox>
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
  
  
