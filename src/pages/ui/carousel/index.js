import React, { Component } from 'react'
import { Card, Carousel } from 'antd';
import './index.less'
export default class Carousels extends Component {
  render() {
    return (
      <div>
        <Card title="文字背景轮播" style={{ marginBottom: '20px' }}>
          <Carousel autoplay effect="fade">
            <div>
              <h3>第一张</h3>
            </div>
            <div>
              <h3>第二张</h3>
            </div>
            <div>
              <h3>第三张</h3>
            </div>
          </Carousel>
        </Card>

        <Card title="图片背景轮播" style={{ marginBottom: '20px' }} className="wrap">
          <Carousel autoplay effect="fade">
            <div>
              <img src="/carousel/carousel-1.jpg" alt=""/>
            </div>
            <div>
              <img src="/carousel/carousel-2.jpg" alt=""/>
            </div>
            <div>
              <img src="/carousel/carousel-3.jpg" alt=""/>
            </div>
          </Carousel>
        </Card>
      </div>
    )
  }
}
