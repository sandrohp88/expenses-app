import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import Login from '../components/Login/Login'
export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  console.log('isAuthenticated :', isAuthenticated)
  return (
    <Route
      {...rest}
      component={props =>
        isAuthenticated ? <Redirect to="/dashboard" /> : <Login {...props}/>
      }
    />
  )
}
const mapStateToProps = state => ({
  isAuthenticated: !!state.logged.uid
})

export default connect(mapStateToProps)(PublicRoute)
