import React, { Component } from 'react'
import {Card, Row, Col, Modal} from 'antd'
import './index.less'
export default class Gallery extends Component {
  state = {
    visible:false
  }
  openGallery = (src) => {
    this.setState({
      showImg:src,
      visible:true
    })
  }
  render() {
    const imgList = [
      ['1.png','2.png','3.png','4.png','5.png','6.png'],
      ['7.png','8.png','9.png','10.png','11.png','12.png'],
      ['13.png','14.png','15.png','16.png','17.png','18.png'],
      ['19.png','20.png','21.png','22.png','23.png','24.png','25.png']
    ]

    const cardList = imgList.map((list) => list.map(item => 
      <Card
        key={item}
        cover={<img src={'/gallery/'+ item} alt="cover-img" className="cover-img" onClick={() => this.openGallery(item)}/>}
        style={{marginBottom:'10px'}}
      >
        <Card.Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
    ))

    return (
      <div className="sallery-div">
        <Row gutter={8}>
          <Col md={6}>
            {cardList[0]}
          </Col>
          <Col md={6}>
            {cardList[1]}
          </Col>
          <Col md={6}>
            {cardList[2]}
          </Col>
          <Col md={6}>
            {cardList[3]}
          </Col>
        </Row>

        <Modal
          title="图片画廊"
          visible={this.state.visible}
          width={500}
          onCancel={() => {
            this.setState({
              visible:false
            })
          }}
          footer={null}
        >
          <img src={'/gallery/'+this.state.showImg} alt="showImg" className="showImg"/>
        </Modal>
      </div>
    )
  }
}
