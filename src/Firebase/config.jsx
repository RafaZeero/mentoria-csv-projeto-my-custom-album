import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyDEeCmxZmvSQOALsD7zqlQoZ5G9o28syK0',
  authDomain: 'mycustomalbum-3e527.firebaseapp.com',
  projectId: 'mycustomalbum-3e527',
  storageBucket: 'mycustomalbum-3e527.appspot.com',
  messagingSenderId: '67154551788',
  appId: '1:67154551788:web:fed58644acffee91e916c9'
}

// firebase init
const app = initializeApp(firebaseConfig)

// firebase db
const db = getFirestore(app)

// firebase collection
const booksCollectionRef = collection(db, 'books')
const gamesCollectionRef = collection(db, 'games')
const moviesCollectionRef = collection(db, 'movies')

// init services
const auth = getAuth(app)

// firebase storage
const storage = getStorage(app)

export { db, auth, storage }
