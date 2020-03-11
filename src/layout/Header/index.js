import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import './index.less'
import { Dropdown, Menu } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined, LoginOutlined } from '@ant-design/icons';
import { formatDate } from '@/utils'
import Axios from '@/utils/axios'

@withRouter
@connect(
  state => ({app:state.app}),
  {
    toggleCollapsed:() => ({type:'toggleCollapsed'}),
  },
)
class Header extends Component {
  constructor(props){
    super(props)
    this.state = {
      date:'',
      weather:'',
      weatherPicUrl:'',
      useName:'超级管理员',
    }

  }
  componentDidMount(){
    this.timerId = setInterval(() => {
      this.setState({
        date:formatDate(new Date()),
      })
    }, 1000)

    this.getWeather()
  }
  componentWillUnmount(){
    clearInterval(this.timerId)
  }

  getWeather(){
    const city = '北京';
    Axios.jsonp({
      url:'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2',
    }).then((res)=>{
      if(res.status ==='success'){
        let data = res.results[0].weather_data[0];
        this.setState({
          weather:data.weather,
          weatherPicUrl:data.dayPictureUrl,
        })
      }
    })
  }
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  // 退出登录
  logout = () => {
    this.props.history.push('/login')
  }

  
  render() {
    const menu = (
      <Menu>
        <Menu.Item onClick={this.logout}>
          <LoginOutlined /> 退出登录
        </Menu.Item>
      </Menu>
    )
    return (
      <div className="header">
        <div className="left">
          {
            this.props.app.collapsed ? 
              (<MenuUnfoldOutlined className="left-icon" onClick={this.props.toggleCollapsed}/>) : (<MenuFoldOutlined className="left-icon" onClick={this.props.toggleCollapsed}/>)
          }
          <div className="menu-title">
            {this.props.app.menuTitle}
          </div>
          
        </div>
            
        <div className="right">
          <div className="date">{this.state.date}</div>
          <div className="weather">{this.state.weather}</div>
          <img src={this.state.weatherPicUrl} alt="weather" className="weather-img"/>
         

          <Dropdown overlay={menu}>
            <div className="user">
              <img src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png" alt="avatar"/>
              <span>{this.state.useName}</span>
            </div>
          </Dropdown>
        </div>
      </div>
    )
  }
}
export default Header
