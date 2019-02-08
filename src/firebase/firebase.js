import firebase from 'firebase'
import expenses from '../sampleData/expenses'
// Initialize Firebase
const config = {
  apiKey: 'AIzaSyASfxshJ8SuhNFrSXPkn6uX_tGdPqfDqIU',
  authDomain: 'expenses-db-6b0ad.firebaseapp.com',
  databaseURL: 'https://expenses-db-6b0ad.firebaseio.com',
  projectId: 'expenses-db-6b0ad',
  storageBucket: '',
  messagingSenderId: '559328508976'
}
firebase.initializeApp(config)
const usersStore = firebase.firestore().collection('users')
const newUser = {
  name: 'Sandro',
  lastName: 'Herrera Pallares',
  email: 'sandrohp88@gmail.com',
  pass: 'xxx',
  expenses: [expenses[0], expenses[1], expenses[2]]
}

// usersStore.add(newUser)
usersStore.onSnapshot(
  querySnapshot => {
    querySnapshot.forEach(user => console.log(user.data()))
  }
)
