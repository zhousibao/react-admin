import React, {useState, useEffect} from 'react'
import { Modal, Form, Input, message, Transfer} from 'antd'
import { rolesDetail, permissionDo } from '../api'
import emitter from '@/utils/eventBus';


export default function Authorization({visible, rolesId, rolesName, callback}) {
  const [list, setList] = useState([])
  const [choosed, setChoosed] = useState([])
  

  useEffect(() => {
    getDetail()
  }, [])

  const getDetail = () => {
    rolesDetail().then(res => {
      if(res.code === '0'){
        setList(res.data.list)
        setChoosed(res.data.choosed)
      }
    })
  }

  // 
  const handleChange = (targetKeys, direction, moveKeys) => {
    // console.log(targetKeys, direction, moveKeys)
    setChoosed(targetKeys)
  }


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

  const submit = (values)=> {
    const data = {
      ...values,
      rolesId,
      choosed:choosed,
    }
    permissionDo(data).then(res => {
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
        title="用户授权"
        visible={visible}
        okText="确认"
        cancelText="取消"
        style={{top:'20px'}}
        bodyStyle={{padding:'20px 15px'}}
        onOk={onOk}
        onCancel={onCancel}
      >
        <Form
          {...layout}
          form={form} 
          initialValues={{
            rolesName:rolesName,
          }}
        >
          <Form.Item
            label="角色名称"
            name="rolesName"
          >
            <Input disabled placeholder="请输入角色名称"/>
          </Form.Item>
        </Form>
        <Transfer
          listStyle={{width: 200, height: 300}}
          dataSource={list}
          titles={['待选用户', '已选用户']}
          targetKeys={choosed}
          onChange={handleChange}
          render={item => item.role_name}
        />
      </Modal>
    </div>
  )
}
