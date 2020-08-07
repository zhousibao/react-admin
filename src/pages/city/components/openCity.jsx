import React from 'react'
import { Modal, Form, Select, Radio, message } from 'antd'
import { addCity } from '@/server/city'
const { Option } = Select

export default function openCity({ visible, callback }) {
  const [form] = Form.useForm();


  const onOk = () => {
    form.validateFields().then(values => {
      submit(values);
    }).catch(info => { });
  }

  const onCancel = () => {
    form.resetFields(); // 清空表单
    callback(false)
  }

  const submit = (data)=> {
    addCity(data).then(res => {
      if(res.code === '0'){
        message.success(res.message)
        form.resetFields(); // 清空表单
        callback(true)
      }
    })
  }


  const layout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 14,
    },
  };

  return (
    <div>
      <Modal

        title="开通城市"
        visible={visible}
        okText="确认"
        cancelText="取消"
        style={{ top: '20px' }}
        bodyStyle={{ padding: '20px 15px' }}
        onOk={onOk}
        onCancel={onCancel}
      >
        <Form
          {...layout}
          form={form} 
          initialValues={{
            cityId: '',
            mode: '',
            op_mode: '',
          }}
        >
          <Form.Item
            label="城市"
            name="cityId"
            rules={[
              {
                required: true,
                message: '请选择城市!',
              },
            ]}
          >
            <Select placeholder="城市" style={{ width: 120 }}>
              <Option value={1}>北京市</Option>
              <Option value={2}>上海市</Option>
              <Option value={3}>天津市</Option>
              <Option value={4}>深圳市</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="用车模式"
            name="mode"
            rules={[
              {
                required: true,
                message: '请选择用车模式!',
              },
            ]}
          >
            <Radio.Group>
              <Radio value={1}>指定停车点模式</Radio>
              <Radio value={2}>禁停区模式</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="运营模式"
            name="op_mode"
            rules={[
              {
                required: true,
                message: '请选择运营模式!',
              },
            ]}
          >
            <Radio.Group>
              <Radio value={1}>自营</Radio>
              <Radio value={2}>加盟</Radio>
            </Radio.Group>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}
