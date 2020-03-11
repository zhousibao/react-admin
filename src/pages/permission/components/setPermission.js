import React, {useState} from 'react'
import { Modal, Form, Input, Radio, message, Tree} from 'antd'
import { permissionDo } from '../api'
import emitter from '@/utils/eventBus';
import menu from '@/layout/menu.js'


export default function Setpermission({visible, rolesId, rolesName, callback}) {
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
      permission:checkedKeys,
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

  const treeData = [{
    title: '平台',
    key: '/all',
    children:menu,
  }]

  // 控制选择的
  const [checkedKeys, setCheckedKeys] = useState(["/admin/home"]);
  const onCheck = checkedKeys => {
    // console.log('onCheck', checkedKeys);
    setCheckedKeys(checkedKeys);
  };
  

  return (
    <div>
      <Modal
        title="设置权限"
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
            rolesName,
            status:1,
          }}
        >
          <Form.Item
            label="角色名称"
            name="rolesName"
          >
            <Input disabled />
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

        <Tree
          checkable
          defaultExpandAll
          checkedKeys={checkedKeys}
          onCheck={onCheck}
          treeData={treeData}
        />

      </Modal>
    </div>
  )
}
