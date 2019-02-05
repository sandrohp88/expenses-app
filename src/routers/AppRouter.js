import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Dashboard } from '../components/Dashboard/Dashboard'
import AddExpense from '../components/AddExpense/AddExpense'
import  EditExpense  from '../components/EditExpense/EditExpense'
import { Header } from '../components/Header/Header'
import { Help } from '../components/Help/Help'
import { NotFound } from '../components/NotFound/NotFound'
const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Dashboard} exact={true} />
        <Route path="/create" component={AddExpense} />
        <Route path="/edit/:id" component={EditExpense} />
        <Route path="/help" component={Help} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
)
export { AppRouter }
