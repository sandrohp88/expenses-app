import firebase from 'firebase'
// Initialize Firebase
const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
}
firebase.initializeApp(config)
// const expensesRef = firebase
//   .firestore()
//   .collection('users/l6MX8XJ3w9sIffcszPNR/expenses')

const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { googleAuthProvider, firebase }
