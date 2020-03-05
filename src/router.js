import React, { Component } from 'react'
import { HashRouter, Route, Switch, Redirect} from 'react-router-dom'

import Layout from './layout'
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


export default class Router extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/login" component={Login}/>

          <Redirect exact from="/" to="/admin/home" />
          <Redirect exact from="/admin" to="/admin/home" />
          <Route path="/admin" render={() => 
            <Layout>
              <Switch>
                <Route path="/admin/home" component={Home}/>
                <Route path="/admin/ui/buttons" component={Buttons}/>
                <Route path="/admin/ui/modals" component={Modals}/>
                <Route path="/admin/ui/tabs" component={Tabs}/>
                <Route path="/admin/ui/gallery" component={Gallery}/>
                <Route path="/admin/ui/carousel" component={Carousel}/>
                <Route path="/admin/form/login" component={FormLogin}/>
                <Route path="/admin/form/register" component={FormRegister}/>
              </Switch> 
            </Layout>
          }/>
          <Route component={NoFound} />
        </Switch>
      </HashRouter>
    ) 
  }
}
