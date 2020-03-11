import React from 'react'
import {Button, Card, Modal} from 'antd'
import {Editor} from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import draftjs from 'draftjs-to-html'
import './index.less'
export default class RichText extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      showModal:false, // 是否显示模态框
      editorContent: '', // 文本内容
      editorState:'',  // 编辑器状态
    }
  }


  // 清空
  handleClearContent = ()=>{
    this.setState({
      editorState:'',
    })
  }

  handleGetText = ()=>{
    this.setState({
      showModal:true,
    })
  }
  onEditorChange = (editorContent) => {
    this.setState({
      editorContent,
    });
  };
  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render(){
    const { showModal, editorContent, editorState } = this.state;
    return (
      <div>
        <Card>
          <Button type="primary" onClick={this.handleClearContent}>清空内容</Button>
          <Button type="primary" onClick={this.handleGetText}>获取HTML文本</Button>
        </Card>
        <Card title="富文本编辑器">
          <Editor
            editorState={editorState}
            onContentStateChange={this.onEditorChange}
            onEditorStateChange={this.onEditorStateChange}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
          />
        </Card>
        <Modal
          title="富文本"
          visible={showModal}
          onCancel={()=>{
            this.setState({
              showModal:false,
            })
          }}
          footer={null}
        >
          {draftjs(editorContent)}
        </Modal>
      </div>
    );
  }
}