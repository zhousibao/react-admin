import React, { Component } from 'react'
import { HashRouter, Route, Switch, Redirect} from 'react-router-dom'

import Layout from './layout'
import Login from './pages/login'
import NoFound from './pages/noFound'
import Home from './pages/home'


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
              </Switch>
            </Layout>
          }/>
          <Route component={NoFound} />
        </Switch>
      </HashRouter>
    ) 
  }
}
