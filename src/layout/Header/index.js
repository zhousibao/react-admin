import React, { Component } from 'react'
import './index.less'
import { Button } from 'antd'
import { LogoutOutlined } from '@ant-design/icons';
import { formatDate } from '@/utils'
import Axios from '@/utils/axios'

export default class Header extends Component {
  constructor(props){
    super(props)
    this.state = {
      date:'',
      weather:'',
      weatherPicUrl:'',
      useName:'超级管理员'
    }
  }
  componentDidMount(){
    this.timerId = setInterval(() => {
      this.setState({
        date:formatDate(new Date())
      })
    },1000)

    this.getWeather()
  }
  componentWillUnmount(){
    clearInterval(this.timerId)
  }

  getWeather(){
    const city = '北京';
    Axios.jsonp({
      url:'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
    }).then((res)=>{
      if(res.status ==='success'){
        let data = res.results[0].weather_data[0];
        this.setState({
          weather:data.weather,
          weatherPicUrl:data.dayPictureUrl
        })
      }
    })
  }
  render() {
    return (
      <div className="header">
        <div className="left">
        导航栏
        </div>
        <div className="right">
          <div className="date">{this.state.date}</div>
          <div className="weather">
            {this.state.weather}
            <img src={this.state.weatherPicUrl} alt="weather" height="16"/>
          </div>
          <div className="name">{this.state.useName}</div>
          <Button type="danger" shape="circle" size="small">
            <LogoutOutlined />
          </Button>
        </div>
      </div>
    )
  }
}
