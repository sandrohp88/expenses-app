import { firebase, googleAuthProvider } from '../../firebase/firebase'

// SIGN_IN_ASYNC
const signInAsync = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider)
  }
}

// SIGN_OUT_ASYNC
const signOutAsync = () => {
  return async () => {
    await firebase.auth().signOut()
    window.location.assign('/')
  }
}

// LOGIN
const login = uid => ({ type: 'LOGIN', uid })

// LOGOUT
const logout = () => ({ type: 'LOGOUT' })

export { signInAsync, signOutAsync, login, logout }
