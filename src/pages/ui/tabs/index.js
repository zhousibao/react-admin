import React from 'react'
import { Card, Tabs, message } from 'antd'
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;
export default class Tab extends React.Component {
  constructor(props){
    super(props)

    this.newTabIndex = 0;
    const panes = [
      { title: 'Tab 1', content: 'Content of Tab 1', key: '1' },
      { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },
      {
        title: 'Tab 3',
        content: 'Content of Tab 3',
        key: '3',
        closable: false,
      },
    ];
    this.state = {
      activeKey: panes[0].key,
      panes,
    };
  }

  callback = (key) => {
    message.info('您选择的标签页为:' + key)
  }

  onChange = activeKey => {
    this.setState({ activeKey });
  };

  onEdit = (targetKey, action) => {
    this[action](targetKey);
  };

  add = () => {
    const { panes } = this.state;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: activeKey, content: 'Content of new Tab', key: activeKey });
    this.setState({ panes, activeKey });
  };

  remove = targetKey => {
    let { activeKey } = this.state;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (panes.length && activeKey === targetKey) {
      if (lastIndex >= 0) {
        activeKey = panes[lastIndex].key;
      } else {
        activeKey = panes[0].key;
      }
    }
    this.setState({ panes, activeKey });
  };

  render(){
    return (
      <div>
        <Card title="tabs标签页" style={{ marginBottom: '20px' }}>
          <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab="Tab 1" key="1">
              Content of Tab Pane 1
            </TabPane>
            <TabPane tab="Tab 2" key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Tab 3" key="3">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
        </Card>

        <Card title="带图标的tabs标签页" style={{ marginBottom: '20px' }}>
          <Tabs defaultActiveKey="1" size="large">
            <TabPane tab={
              <span>
                <AppleOutlined />
                Tab 1
              </span>
            } key="1">
              Content of Tab Pane 1
            </TabPane>
            <TabPane tab={
              <span>
                <AndroidOutlined />
                Tab 2
              </span>
            } key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Tab 3" key="3">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
        </Card>

        <Card title="可编辑的标签页" style={{ marginBottom: '20px' }}>
          <Tabs 
            activeKey={this.state.activeKey}
            type="editable-card" 
            onChange={this.onChange}
            onEdit={this.onEdit}
          >
            {this.state.panes.map(pane => (
              <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>
                {pane.content}
              </TabPane>
            ))}
          </Tabs>
        </Card>
      </div>
    )
  }
}