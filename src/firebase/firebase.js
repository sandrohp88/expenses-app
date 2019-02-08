import firebase from 'firebase'
import expenses from '../sampleData/expenses'
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
const expensesRef = firebase
  .firestore()
  .collection('users/l6MX8XJ3w9sIffcszPNR/expenses')

// const usersStore = firebase.firestore().collection('users')
// const user = usersStore.doc('l6MX8XJ3w9sIffcszPNR')
// expensesRef.add(expenses[0]).then(response => console.log(response.id))
// const newUser = {
//   name: 'Sandro',
//   lastName: 'Herrera Pallares',
//   email: 'sandrohp88@gmail.com',
//   pass: 'xxx',
//   expenses: [expenses[0], expenses[1], expenses[2]]
// }
// usersStore.doc('l6MX8XJ3w9sIffcszPNR').update({
//   expenses: firebase.firestore.FieldValue.arrayUnion({
//     note: 'newExpense',
//     createdAt: 100,
//     description: 'brand new expense'
//   })
// })

// console.log(user.then(data => console.log(data.data().expenses)))
// usersStore.add(newUser)
// usersStore.onSnapshot(
//   querySnapshot => {
//     querySnapshot.forEach(user => console.log(user.data()))
//   }
// )

export { firebase, expensesRef as default }
