import React, { Component } from 'react'
import { HashRouter, Route, Switch, Redirect} from 'react-router-dom'
import App from './App';

import Admin from './layout/admin'
import Commom from './layout/common'
import Login from './pages/login'
import NoFound from './pages/noFound'
import Home from './pages/home'

import Buttons from './pages/ui/buttons'
import Modals from './pages/ui/modals'
import Tabs from './pages/ui/tabs'
import Gallery from './pages/ui/gallery'
import Carousel from './pages/ui/carousel'
import FormLogin from './pages/form/login'
import FormRegister from './pages/form/register'
import Basic from './pages/table/basic'
import Selection from './pages/table/selection'
import Resize from './pages/table/resize'

import City from './pages/city'
import Order from './pages/order'
import OrderDetail from './pages/order/detail'
import Bar from './pages/echarts/bar'
import Pie from './pages/echarts/pie'
import Line from './pages/echarts/line'
import Editor from './pages/editor'
import Permission from './pages/permission'


export default class Router extends Component {
  render() {
    return (
      <App>
        <HashRouter>
          <Switch>

            <Route path="/login" component={Login}/>
          
            <Redirect exact from="/" to="/admin/home" />
            <Redirect exact from="/admin" to="/admin/home" />
            <Route path="/admin" render={() => 
              <Admin>
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
              </Admin>
            }/>
            <Route path="/common" render={() => 
              <Commom>
                <Switch>
                  <Route path="/common/orderDetail/:id" component={OrderDetail}/>
                </Switch>
              </Commom>
            }/>
            <Route component={NoFound} />
          </Switch>
        </HashRouter>
      </App>
      
    ) 
  }
}
