import React, { Component } from 'react'
import './index.less'
export default class NoFound extends Component {
  /**
   * 挂载阶段
   */

  // 初始化阶段
  constructor(props){
    console.log('constructor')
    super(props)
    this.state = {
      title:'404'
    }
  }
  // 普通函数
  add = () => {
    this.setState({
      title:'你好'
    })
  }
  
  static getDerivedStateFromProps(props, state){
    console.log('getDerivedStateFromProps')
    // 会在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用。
    // 主要目的：让组件在 props 变化时更新 state
    // 它应返回一个对象来更新 state，如果返回 null 则不更新任何内容。
    return null
  } 
  render() {
    console.log('render')
    // 不要在render里面修改state,会触发死循环导致栈溢出。
    return (
      <div>
        <div className="not" onClick={this.add}>{this.state.title}</div>
        <h1 className="no-found">NoFound!</h1>
      </div>
    )
  }
  // 挂载完成后
  componentDidMount(){
    console.log('componentDidMount')
    // 在组件挂载完成后调用，且全局只调用一次。
    // 可以在这里使用refs，获取真实dom元素、进行交互、添加订阅     
  }




  /**
   * 更新阶段
   */

  // static getDerivedStateFromProps(){}
  // 是否重新渲染
  shouldComponentUpdate(nextProps, nextState){
    console.log('shouldComponentUpdate')
      // 默认返回true，需要重新render。返回false则不触发渲染。
      // 使用 forceUpdate() 时不会调用该方法。
      // 使用PureComponent代替
      return true
  }
  // render() {}
  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('getSnapshotBeforeUpdate')
      // 在最近一次渲染输出（提交到 DOM 节点）之前调用
      // 它使得组件能在发生更改之前从 DOM 中捕获一些信息（例如，滚动位置）
      // 此生命周期的任何返回值将作为传递给componentDidUpdate()的第三参数。
      return null
  }
  // 组件更新完成
  componentDidUpdate(prevProps, prevState, snapshot){
    console.log('componentDidUpdate')
      // 谨慎调用setState(),否则会导致死循环
  }



  /**
   * 卸载阶段
   */
  componentWillUnmount(){
    console.log('componentWillUnmount')
    // 一般在这删除之前订阅的事件 
  } 



  /**
   * 错误处理阶段
   */
  // 当渲染过程，生命周期，或子组件的构造函数中抛出错误时，会调用如下方法：
  static getDerivedStateFromError(error){
    console.log('getDerivedStateFromError')
    // 此生命周期会在后代组件抛出错误后被调用
    // 并返回一个值以更新 state
    return  null
  }
  componentDidCatch(error, info){
    console.log('componentDidCatch')
    // 此生命周期在后代组件抛出错误后被调用
  }



  /**
   * 过时的生命周期方法
   * 
   * componentWillMount() // 组件挂载前
   * componentWillReceiveProps(nextProps) // 会在已挂载的组件接收新的 props 之前被调用
   * componentWillUpdate(nextProps, nextState) // 更新渲染之前调用
   */

}