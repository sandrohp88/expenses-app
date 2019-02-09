import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import Header from '../components/Header/Header'
export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  console.log('isAuthenticated :', isAuthenticated)
  return (
    <Route
      {...rest}
      component={props =>
        isAuthenticated ? (
          <React.Fragment>
            <Header />
            <Component {...props} />
          </React.Fragment>
        ) : (
          <Redirect to="/" />
        )
      }
    />
  )
}
const mapStateToProps = state => ({
  isAuthenticated: !!state.logged.uid
})

export default connect(mapStateToProps)(PrivateRoute)
