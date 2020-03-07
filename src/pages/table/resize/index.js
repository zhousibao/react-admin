import React, {Component} from 'react'
import {Card, Table} from 'antd'
import { Resizable } from 'react-resizable';
import './index.less'
import { tableList1 } from '../api'

const ResizeableTitle = props => {
  const { onResize, width, ...restProps } = props;

  if (!width) {
    return <th {...restProps} />;
  }

  return (
    <Resizable
      width={width}
      height={0}
      onResize={onResize}
      draggableOpts={{ enableUserSelectHack: false }}
    >
      <th {...restProps} />
    </Resizable>
  );
};


export default class Resize extends Component{
  constructor(props){
    super(props)

    this.state = {
      loading:false,
      columns: [
        {
          title: '姓名',
          dataIndex: 'name',
          align:'center',
          width: 200,
        },
        {
          title: '姓名',
          dataIndex: 'name',
          align:'center',
          width: 200,
        },
        {
          title: '姓名',
          dataIndex: 'name',
          align:'center',
          width: 200,
        },
        {
          title: '姓名',
          dataIndex: 'name',
          align:'center',
          width: 200,
        },
        {
          title: '年龄',
          dataIndex: 'age',
          align:'center',
          width: 200,
        },
        {
          title: '性别',
          dataIndex: 'sex',
          align:'center',
          width: 200,
        },
        {
          title: '薪资',
          dataIndex: 'salary',
          align:'center',
          width: 200,
        }
      ]
    }
  }

  components = {
    header: {
      cell: ResizeableTitle,
    }
  }

  componentDidMount(){
    this.getTableList()
  }

  getTableList = () => {
    this.setState({
      loading:true
    })
    tableList1().then(res => {
      if(res.code === '0'){
        this.setState({
          loading:false,
          dataSource:res.data.list
        })
      }
    }).catch(err => {
      this.setState({
        loading:false
      })
    })
  }

  handleResize = index => (e, { size }) => {
    this.setState(({ columns }) => {
      const nextColumns = [...columns];
      nextColumns[index] = {
        ...nextColumns[index],
        width: size.width,
      };
      return { columns: nextColumns };
    });
  };

  render(){
    const columnsResize = this.state.columns.map((col, index) => ({
      ...col,
      onHeaderCell: column => ({
        width: column.width,
        onResize: this.handleResize(index),
      }),
    }));

    return (
      <div>
        <Card title="伸缩表格" id="components-table-demo-resizable-column">
          <Table 
            bordered 
            dataSource={this.state.dataSource}
            columns={columnsResize}
            components={this.components}
            pagination={false}
            loading={this.state.loading}
          />
        </Card>
      </div>
    )
  }
}