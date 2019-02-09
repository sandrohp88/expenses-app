import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Dashboard } from '../components/Dashboard/Dashboard'
import AddExpense from '../components/AddExpense/AddExpense'
import EditExpense from '../components/EditExpense/EditExpense'
import { Help } from '../components/Help/Help'
import { NotFound } from '../components/NotFound/NotFound'
import Login from '../components/Login/Login'
import PrivateRoute from '../routers/PrivateRoutes'
const AppRouter = () => (
  <BrowserRouter>
    <div>
      {/* <Header /> */}
      <Switch>
        <Route path="/" component={Login} exact={true} />
        <PrivateRoute path="/dashboard" component={Dashboard} exact={true}/>
        <PrivateRoute path="/create" component={AddExpense} />
        <PrivateRoute path="/edit/:id" component={EditExpense} />
        <Route path="/help" component={Help} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
)
export { AppRouter }
