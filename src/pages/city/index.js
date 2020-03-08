import React, { Component } from 'react'
import {Card, Table, Form, Input, Select, Button} from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import {cityList} from './api'
const { Option } = Select
import {formatDate, pagination} from '@/utils'

export default class CityList extends Component {
  constructor(props){
    super(props)

    this.state = {
      form:{
        cityId:'',
        mode:'',
        op_mode:'',
        auth_status:'',
        search:''
      },

      pagination:{
        pageNum:1,
        pageSize:10,
        total:0
      },
      cityList:[],
      loading:false,
    }

  }
  formRef = React.createRef();

  componentDidMount(){
    this.getCityList()
  }
  getCityList = () => {
    this.setState({
      loading:true
    })
    const data = {
     ...this.state.pagination,
     ...this.state.form
    }
    cityList(data).then(res => {
      if(res.code === '0'){
        this.setState({
          cityList:res.data.list,
          pagination:{ ...this.state.pagination, total:res.data.total}
        })
      }
    }).finally(() => {
      this.setState({
        loading:false
      })
    })
  }

  searchList = (values) => {
    this.setState({
      pagination:{...this.state.pagination,pageNum:1},
      form:{...values}
    })
    this.getCityList()
  }
  onReset = () => {
    this.formRef.current.resetFields();
  };
  changePage = (pageNum,pageSize) => {
    this.setState((state,props) => {
      return {pagination: {...state.pagination,pageNum,pageSize}};
    }, () => this.getCityList());
  }

  render() {
    const columns = [
      {
          title:'城市ID',
          dataIndex:'id'
      }, {
          title: '城市名称',
          dataIndex: 'name'
      }, {
          title: '用车模式',
          dataIndex: 'mode',
          render(mode){
              return mode === 1 ? '停车点':'禁停区';
          }
      }, {
          title: '营运模式',
          dataIndex: 'op_mode',
          render(op_mode) {
              return op_mode === 1 ? '自营' : '加盟';
          }
      }, {
          title: '授权加盟商',
          dataIndex: 'franchisee_name'
      }, {
          title: '城市管理员',
          dataIndex: 'city_admins',
          render(arr){
              return arr.map((item)=>{
                  return item.user_name;
              }).join(',');
          }
      }, {
          title: '城市开通时间',
          dataIndex: 'open_time'
      }, {
          title: '操作时间',
          dataIndex: 'update_time',
          render: (update_time) => formatDate(update_time)
      }, {
          title: '操作人',
          dataIndex: 'sys_user_name'
      }
    ]

    return (
      <div>
        <Card style={{marginBottom:'10px'}}>
          <Form
            ref={this.formRef}
            layout="inline"
            initialValues={{
              ...this.state.form
            }}
            onFinish={this.searchList}
          >
            <Form.Item
              name="cityId"
              placeholder="城市"
            >
              <Select allowClear style={{ width: 120 }}>
                <Option value={1}>北京市</Option>
                <Option value={2}>上海市</Option>
                <Option value={3}>天津市</Option>
                <Option value={4}>深圳市</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="mode"
              placeholder="用车模式"
            >
              <Select allowClear style={{ width: 160 }}>
                <Option value={1}>指定停车点模式</Option>
                <Option value={2}>禁停区模式</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="op_mode"
              placeholder="运营模式"
            >
              <Select allowClear style={{ width: 120 }}>
                <Option value={1}>自营</Option>
                <Option value={2}>加盟</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="auth_status"
              placeholder="授权状态"
            >
              <Select allowClear style={{ width: 120 }}>
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
              <Button onClick={this.onReset}>重置</Button>
            </Form.Item>
          </Form>
        </Card>

        <Card>
        <Table
          loading={this.state.loading}
          bordered
          columns={columns}
          dataSource={this.state.cityList}
          pagination={pagination({...this.state.pagination},this.changePage)}
        />
        </Card>
      </div>
    )
  }
}
