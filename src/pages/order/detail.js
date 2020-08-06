import React, { Component } from 'react'
import { Card } from 'antd'
import style from './detail.module.less'
import { orderDetail } from './api'
import startPointImg from '@/assets/start_point.png'
import endPointImg from '@/assets/end_point.png'

export default class Detail extends Component {
  constructor(props){
    super(props)

    this.state ={
      info: {},
    }
  }
  componentDidMount(){
    this.getDetail()
  }
  getDetail = () => {
    const params = {
      id: this.props.match.params.id,
    }
    orderDetail(params).then(res => {
      if(res.code === '0'){
        this.setState({
          info: res.data,
        })
        this.renderMap(res.data)
      }
    })
  }

  // 地图
  renderMap = (result)=>{
    this.map = new window.BMap.Map('mapCon');
    this.map.centerAndZoom('北京', 11);
    // 添加地图控件
    this.addMapControl();
    // 调用路线图绘制方法
    this.drawBikeRoute(result.position_list);
    // 调用服务区绘制方法
    this.drwaServiceArea(result.area);
  }

  // 添加地图控件
  addMapControl = ()=>{
    let map = this.map;
    map.addControl(new window.BMap.ScaleControl({ anchor: window.BMAP_ANCHOR_TOP_RIGHT }));
    map.addControl(new window.BMap.NavigationControl({ anchor: window.BMAP_ANCHOR_TOP_RIGHT }));
  }

  // 绘制用户的行驶路线
  drawBikeRoute = (positionList)=>{
    let startPoint = '';
    let endPoint = '';
    if (positionList.length>0){
      let first = positionList[0];
      let last = positionList[positionList.length-1];
      startPoint = new window.BMap.Point(first.lon, first.lat);
      let startIcon = new window.BMap.Icon(startPointImg, new window.BMap.Size(36, 42), {
        imageSize: new window.BMap.Size(36, 42),
        anchor: new window.BMap.Size(18, 42),
      })

      let startMarker = new window.BMap.Marker(startPoint, { icon: startIcon });
      this.map.addOverlay(startMarker);

      endPoint = new window.BMap.Point(last.lon, last.lat);
      let endIcon = new window.BMap.Icon(endPointImg, new window.BMap.Size(36, 42), {
        imageSize: new window.BMap.Size(36, 42),
        anchor: new window.BMap.Size(18, 42),
      })
      let endMarker = new window.BMap.Marker(endPoint, { icon: endIcon });
      this.map.addOverlay(endMarker);

      // 连接路线图
      let trackPoint = [];
      for(let i=0;i<positionList.length;i++){
        let point = positionList[i];
        trackPoint.push(new window.BMap.Point(point.lon, point.lat));
      }

      let polyline = new window.BMap.Polyline(trackPoint, {
        strokeColor: '#1869AD',
        strokeWeight: 3,
        strokeOpacity: 1,
      })
      this.map.addOverlay(polyline);
      this.map.centerAndZoom(endPoint, 11);
    }
      
  }

  // 绘制服务区
  drwaServiceArea = (positionList)=>{
    // 连接路线图
    let trackPoint = [];
    for (let i = 0; i < positionList.length; i++) {
      let point = positionList[i];
      trackPoint.push(new window.BMap.Point(point.lon, point.lat));
    }
    // 绘制服务区
    let polygon = new window.BMap.Polygon(trackPoint, {
      strokeColor: '#CE0000',
      strokeWeight: 4,
      strokeOpacity: 1,
      fillColor: '#ff8605',
      fillOpacity: 0.4,
    })
    this.map.addOverlay(polygon);
  }

  render() {
    const { info } = this.state
    return (
      <div>
        <Card title="订单详情">
          <div className={style.orderDetail}>
            <p className={style.title}>基础信息</p>
            <ul>
              <li>
                <div className={style.left}>用车模式</div>
                <div className={style.content}>{info.mode === 1 ?'服务区':'停车点'}</div>
              </li>
              <li>
                <div className={style.left}>订单编号</div>
                <div className={style.content}>{info.order_sn}</div>
              </li>
              <li>
                <div className={style.left}>车辆编号</div>
                <div className={style.content}>{info.bike_sn}</div>
              </li>
              <li>
                <div className={style.left}>用户姓名</div>
                <div className={style.content}>{info.user_name}</div>
              </li>
              <li>
                <div className={style.left}>手机号码</div>
                <div className={style.content}>{info.mobile}</div>
              </li>
            </ul>
            <p className={style.title}>行驶轨迹</p>
            <ul>
              <li>
                <div className={style.left}>行程起点</div>
                <div className={style.content}>{info.start_location}</div>
              </li>
              <li>
                <div className={style.left}>行程终点</div>
                <div className={style.content}>{info.end_location}</div>
              </li>
              <li>
                <div className={style.left}>行驶里程</div>
                <div className={style.content}>{info.distance/1000}公里</div>
              </li>
            </ul>
          </div>

          <div id="mapCon" className={style.order_map}></div>
        </Card>
      </div>
    )
  }
}
