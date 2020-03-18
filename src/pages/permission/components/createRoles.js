import React from 'react'
import { Modal, Form, Input, Radio, message } from 'antd'
import { createRoles } from '../api'
import emitter from '@/utils/eventBus';

export default function CreateRoles({ visible, callback }) {
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
    createRoles(data).then(res => {
      if(res.code === '0'){
        message.success(res.message)
        form.resetFields(); // 清空表单
        emitter.emit('reloadRolesTable');
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
        title="创建角色"
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
            name: undefined,
            status: 1,
          }}
        >
          <Form.Item
            label="角色名称"
            name="name"
            rules={[
              {
                required: true,
                message: '请输入角色名称!',
              },
            ]}
          >
            <Input placeholder="请输入角色名称"/>
          </Form.Item>
          
          <Form.Item
            label="状态"
            name="status"
          >
            <Radio.Group>
              <Radio value={1}>启用</Radio>
              <Radio value={2}>关闭</Radio>
            </Radio.Group>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}
