import React, { Component } from 'react'
import { Card } from 'antd'

import ReactEcharts from 'echarts-for-react';
import echartsTheme from '../echartsTheme'

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts'
// 引入柱形图
import 'echarts/lib/chart/bar'
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';

// 注册主题
echarts.registerTheme('echartsTheme', echartsTheme)


export default class Bar extends Component {
  getOption = () => ({
    title:{
      text:'用户骑行订单',
    },
    tooltip : {
      trigger: 'axis',
    },
    xAxis:{
      type: 'category',
      data:['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    },
    yAxis:{
      type:'value',
    },
    series:[
      {
        name:'订单量',
        type:'bar',
        data:[1000, 2000, 2500, 3000, 2000, 1000, 1500],
      },
    ],
  })

  getOption2 = () => ({
    title: {
      text: '用户骑行订单',
    },
    tooltip : {
      trigger: 'axis',
    },
    legend:{
      data:['OFO', '摩拜', '小蓝'],
    },
    xAxis: {
      data:['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'OFO',
        type: 'bar',
        data: [2000, 3000, 5500, 7000, 8000, 12000, 20000],
      },
      {
        name: '摩拜',
        type: 'bar',
        data: [1500, 3000, 4500, 6000, 8000, 10000, 15000],
      },
      {
        name: '小蓝',
        type: 'bar',
        data: [1000, 2000, 2500, 4000, 6000, 7000, 8000],
      },
    ],
  })

  render() {
    return (
      <div>
        <Card title="柱形图1" style={{marginBottom:'10px'}}>
          <ReactEcharts 
            option={this.getOption()} 
            theme="echartsTheme"
            style={{height:500}}
          />
        </Card>
        <Card title="柱形图2">
          <ReactEcharts 
            option={this.getOption2()} 
            theme="echartsTheme"
            style={{height:500}}
          />
        </Card>
      </div>
    )
  }
}
