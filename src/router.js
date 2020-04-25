import React, { Component, Suspense, lazy } from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import App from './App';
import Admin from './layout/admin'
import Common from './layout/common'
import Login from './pages/login'
import NoFound from './pages/noFound'

/***
 * 路由懒加载  
 * 只懒加载admin的子路由
 * 如果懒加载全部路由会导致菜单闪烁
 */
const Home = lazy(() => import('./pages/home'))
const Buttons = lazy(() => import('./pages/ui/buttons'))
const Modals = lazy(() => import('./pages/ui/modals'))
const Tabs = lazy(() => import('./pages/ui/tabs'))
const Gallery = lazy(() => import('./pages/ui/gallery'))
const Carousel = lazy(() => import('./pages/ui/carousel'))

const FormLogin = lazy(() => import('./pages/form/login'))
const FormRegister = lazy(() => import('./pages/form/register'))
const Basic = lazy(() => import('./pages/table/basic'))
const Selection = lazy(() => import('./pages/table/selection'))
const Resize = lazy(() => import('./pages/table/resize'))

const City = lazy(() => import('./pages/city'))
const Order = lazy(() => import('./pages/order'))
const OrderDetail = lazy(() => import('./pages/order/detail'))

const Bar = lazy(() => import('./pages/echarts/bar'))
const Pie = lazy(() => import('./pages/echarts/pie'))
const Line = lazy(() => import('./pages/echarts/line'))

const Editor = lazy(() => import('./pages/editor'))
const Permission = lazy(() => import('./pages/permission'))


export default class Router extends Component {
  render() {
    return (
      <App>
        <HashRouter>
          <Suspense fallback={<div style={{ fontSize: 20, textAlign: 'center' }}>Loading...</div>}>
            <Switch>
              <Route path="/login" component={Login}/>
              <Redirect exact from="/" to="/admin/home" />
              <Redirect exact from="/admin" to="/admin/home" />
              <Route path="/admin" render={() => 
                <Admin>
                  <Suspense fallback={<div style={{ fontSize: 20, textAlign: 'center' }}>Loading...</div>}>
                    <Switch>
                      <Route path="/admin/home" component={Home}/>
                      <Route path="/admin/ui/buttons" component={Buttons}/>
                      <Route path="/admin/ui/modals" component={Modals}/>
                      <Route path="/admin/ui/tabs" component={Tabs}/>
                      <Route path="/admin/ui/gallery" component={Gallery}/>
                      <Route path="/admin/ui/carousel" component={Carousel}/>
                      <Route path="/admin/form/login" component={FormLogin}/>
                      <Route path="/admin/form/register" component={FormRegister}/>
                      <Route path="/admin/table/basic" component={Basic}/>
                      <Route path="/admin/table/selection" component={Selection}/>
                      <Route path="/admin/table/resize" component={Resize}/>
                
                      <Route path="/admin/city" component={City}/>
                      <Route path="/admin/order" component={Order}/>

                      <Route path="/admin/echarts/bar" component={Bar}/>
                      <Route path="/admin/echarts/pie" component={Pie}/>
                      <Route path="/admin/echarts/line" component={Line}/>
                      <Route path="/admin/editor" component={Editor}/>
                      <Route path="/admin/permission" component={Permission}/>
                    </Switch> 
                  </Suspense>
                </Admin>
              }/>
              <Route path="/common" render={() => 
                <Common>
                  <Switch>
                    <Route path="/common/orderDetail/:id" component={OrderDetail}/>
                  </Switch>
                </Common>
              }/>
              <Route component={NoFound} />
            </Switch>
          </Suspense>
        </HashRouter>
      </App>
      
    ) 
  }
}
