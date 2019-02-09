import React from 'react'
import firebase from 'firebase'
import { connect } from 'react-redux'
import { signInAsync } from '../../redux/actions/auth'

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
export const Login = params => {
  
  // FirebaseUI config.
  var uiConfig = {
    signInSuccessUrl: 'dashboard',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    // tosUrl and privacyPolicyUrl accept either url string or a callback
    // function.
    // Terms of service url/callback.
    tosUrl: '<your-tos-url>',
    // Privacy policy url/callback.
    privacyPolicyUrl: function() {
      window.location.assign('<your-privacy-policy-url>')
    }
  }
  return (
    <React.Fragment>
      <p>Login page</p>

      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </React.Fragment>
  )
}

const mapDispatchToProp = dispatch => ({
  signInAsync: dispatch(signInAsync)
})

export default connect(
  undefined,
  mapDispatchToProp
)(Login)
