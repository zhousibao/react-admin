import React, { Component } from 'react'
import { Card, Button } from 'antd'
import SearchForm from './components/searchForm'
import CityTable from './components/cityTable'
import OpenCity from './components/openCity'
import { cityList } from './api'

const initialValues = {
  cityId: undefined,
  mode: undefined,
  op_mode: undefined,
  auth_status: undefined,
  search: undefined,
}


class CityList extends Component {
  constructor(props){
    super(props)

    this.state = {
      form: {
        ...initialValues,
      },

      pagination: {
        pageNum: 1,
        pageSize: 10,
        total: 0,
      },
      cityList: [],
      loading: false,

      visible: false,
    }

  }

  componentDidMount(){
    this.getCityList()
  }
  getCityList = () => {
    this.setState({
      loading: true,
    })
    const data = {
      ...this.state.pagination,
      ...this.state.form,
    }
    cityList(data).then(res => {
      if(res.code === '0'){
        this.setState({
          cityList: res.data.list,
          pagination: { ...this.state.pagination, total: res.data.total },
        })
      }
    }).finally(() => {
      this.setState({
        loading: false,
      })
    })
  }

  searchList = (data) => {
    this.setState({
      form: { ...data },
      pagination: { ...this.state.pagination, pageNum: 1 },
    })
    this.getCityList()
  }
  
  changePage = (pageNum, pageSize) => {
    this.setState((state, props) => {
      return { pagination: { ...state.pagination, pageNum, pageSize }};
    }, () => this.getCityList());
  }

  openCityModal = () => {
    this.setState({
      visible: true,
    })
  }

  closeCityModal = (type) => {
    this.setState({
      visible: false,
    })

    type && this.getCityList()
  }
  

  render() {
    return (
      <div>
        <Card style={{ marginBottom: '10px' }}>
          <SearchForm
            {...initialValues}
            callback={this.searchList}
          />
        </Card>
        <Card>
          <Button type="primary" onClick={this.openCityModal}>开通城市</Button>
          <OpenCity
            visible={this.state.visible}
            callback={this.closeCityModal}
          />
        </Card>
        <Card>
          <CityTable
            loading={this.state.loading}
            pagination={this.state.pagination}
            cityList={this.state.cityList}
            callback={this.changePage}
          />
        </Card>
      </div>
    )
  }
}
export default CityList
