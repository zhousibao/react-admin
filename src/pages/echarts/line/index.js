import React, { Component } from 'react'
import { Card } from 'antd'

import ReactEcharts from 'echarts-for-react';
import theme from '../echartsTheme'

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts'
// 引入折线图
import 'echarts/lib/chart/line'
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';

// 注册主题
echarts.registerTheme('theme', theme)


export default class Pie extends Component {
  getOption = () => ({
    title: {
      text: '用户骑行订单',
      x: 'center',
    }, 
    tooltip: {
      trigger: 'axis',
    },
    xAxis: {
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: '订单量',
        type: 'line',
        data: [1000, 1000, 2000, 1500, 3000, 2000, 1200],
      },
    ],
  })

  getOption2 = () => ({
    title: {
      text: '用户骑行订单',
    }, 
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['OFO订单量', '摩拜订单量'],
    },
    xAxis: {
      type: 'category',
      
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'OFO订单量',
        type: 'line',
        data: [1000, 1000, 2000, 1500, 3000, 2000, 1200],
      },
      {
        name: '摩拜订单量',
        type: 'line',
        data: [1000, 2000, 5500, 6000, 8000, 10000, 12000],
      },
    ],
  })


  getOption3 = () => ({
    title: {
      text: '用户骑行订单',
      x: 'center',
    }, 
    tooltip: {
      trigger: 'axis',
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: '订单量',
        type: 'line',
        areaStyle: {},
        data: [1000, 1000, 2000, 1500, 3000, 2000, 1200],
      },
    ],
  })

  render() {
    return (
      <div>
        <Card title="折线图1" style={{ marginBottom: '10px' }}>
          <ReactEcharts 
            option={this.getOption()} 
            theme="theme"
            style={{ height: 500 }}
          />
        </Card>
        <Card title="折线图2" style={{ marginBottom: '10px' }}>
          <ReactEcharts 
            option={this.getOption2()} 
            theme="theme"
            style={{ height: 500 }}
          />
        </Card>
        <Card title="折线图3" style={{ marginBottom: '10px' }}>
          <ReactEcharts 
            option={this.getOption3()} 
            theme="theme"
            style={{ height: 500 }}
          />
        </Card>
      </div>
    )
  }
}
