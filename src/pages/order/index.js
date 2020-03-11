import React, { Component } from 'react'
import {Card} from 'antd'
import SearchForm from './components/searchForm'
import OrderTable from './components/orderTable'
import { orderList } from './api'
import {formatDate} from '@/utils'

const initialValues = {
  cityId:undefined,
  time:null,
  status:undefined,
  search:undefined,
}
export default class CityList extends Component {
  constructor(props){
    super(props)

    this.state = {
      form:{
        ...initialValues,
      },

      pagination:{
        pageNum:1,
        pageSize:10,
        total:0,
      },
      list:[],
      loading:false,
    }

  }

  componentDidMount(){
    this.getList()
  }
  getList = () => {
    this.setState({
      loading:true,
    })
    const data = {
      ...this.state.pagination,
      ...this.state.form,
      time:'', // 去除time为数组
    }
    if(this.state.form.time){
      data.startTime = formatDate(this.state.form.time[0])
      data.endTime = formatDate(this.state.form.time[0])
    }
    orderList(data).then(res => {
      if(res.code === '0'){
        this.setState({
          list:res.data.list,
          pagination:{ ...this.state.pagination, total:res.data.total},
        })
      }
    }).finally(() => {
      this.setState({
        loading:false,
      })
    })
  }

  searchList = (data) => {
    this.setState({
      form:{...data},
      pagination:{...this.state.pagination, pageNum:1},
    })
    this.getList()
  }
  
  changePage = (type, pageNum, pageSize) => {
    if(type === 'change'){
      this.setState((state, props) => {
        return {pagination: {...state.pagination, pageNum, pageSize}};
      }, () => this.getList());
    }
    if(type === 'close'){
      this.getList()
    }
  }
  

  render() {
    return (
      <div>
        <Card style={{marginBottom:'10px'}}>
          <SearchForm
            {...initialValues}
            callback={this.searchList}
          />
        </Card>
        <Card>
          <OrderTable
            loading={this.state.loading}
            pagination={this.state.pagination}
            list={this.state.list}
            callback={this.changePage}
          />
        </Card>
      </div>
    )
  }
}
