import React, {Component} from 'react'
import {Card,Table,Tag,Button,Popover,Modal,message} from 'antd'
import {RightOutlined} from '@ant-design/icons'
import {tableList} from '../api'

export default class Basic extends Component{
  constructor(props){
    super(props)

    this.state = {
      loading:false
    }
  }

  componentDidMount(){
    this.getTableList()
  }

  getTableList = () => {
    this.setState({
      loading:true
    })
    tableList().then(res => {
      if(res.code === '0'){
        this.setState({
          loading:false,
          dataSource:res.data.list
        })
      }
    }).catch(err => {})
  }

  delete = (item) => {
    Modal.confirm({
      title: '注意',
      content: `您确定要删除${item.name}吗？`,
      onCancel: () => {
        message.info('取消删除')
      },
      onOk:() => {
        message.success('删除成功')
      }
    })
  }

  render(){

    const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        align:'center',
        width:100,
        fixed:'left'
      },
      {
        title: '年龄',
        dataIndex: 'age',
        align:'center',
        width: 80,
      },
      {
        title: '性别',
        dataIndex: 'sex',
        align:'center',
        width: 80,
        render: sex => sex === 1 ? '男':'女'
      },
      {
        title: '爱好',
        dataIndex: 'likeList',
        align:'center',
        width: 120,
        render: likeList => {
          const content = (
            <div>
              {
                likeList.map(item => (
                <p key={item}>{item}</p>
                ))
              }
            </div>
          )
          return (
            <Popover placement="rightTop" content={content} trigger="click">
              <Button>{likeList[0]} <RightOutlined/></Button>
            </Popover>
          )
        }
      },
      {
        title: '状态',
        dataIndex: 'state',
        align:'center',
        width: 120,
        render: state => {
          const stateList = {
            1:'风华浪子',
            2:'咸鱼一条',
            3:'技术大佬',
            4:'创业者',
            5:'已修仙'
          }

          if(state === 1 || state === 2){
            return (
              <Tag color="geekblue">
                {stateList[state]}
              </Tag>
            )
          }
          if(state === 3 || state === 4){
            return (
              <Tag color="green">
                {stateList[state]}
              </Tag>
            )
          }

          return (
            <Tag color="volcano">
              {stateList[state]}
            </Tag>
          )
          
          
          return stateList[state]
        }
      },
      {
        title: '住址',
        dataIndex: 'address',
        width: 300,

      },
      {
        title: '网址',
        dataIndex: 'url',
        width: 200,
      },
      {
        title:'邮箱',
        dataIndex:'email',
        width: 200,
      },
      {
        title: '操作',
        key: 'action',
        width: 130,
        fixed:'right',
        render: (item) => (
            <Button type="danger" size="small" onClick={() => this.delete(item)}>删除</Button>
        )
      },
    ];

    return (
      <div>
        <Card title="基础表格">
          <Table 
            bordered 
            dataSource={this.state.dataSource}
            columns={columns}
            pagination={false}
            loading={this.state.loading}
            scroll={{
              x:true,
              y:500
            }}
          />
        </Card>
      </div>
    )
  }
}