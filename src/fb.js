// firebase.js
import { initializeApp } from 'firebase/app'
import { getFirestore, doc, setDoc } from 'firebase/firestore'
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { getAnalytics } from 'firebase/analytics'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDx3PctIAsB8pACZltf8zFRmUXNRBH0CDU',
  authDomain: 'keegan123.firebaseapp.com',
  databaseURL: 'https://keegan123.firebaseio.com',
  projectId: 'keegan123',
  storageBucket: 'keegan123.appspot.com',
  messagingSenderId: '606111156060',
  appId: '1:606111156060:web:e670f6b29fabaeac55e399',
  measurementId: 'G-JDKLXMM9DW'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const analytics = getAnalytics(app)
const auth = getAuth()

export { db, doc, setDoc, auth, onAuthStateChanged, signInWithEmailAndPassword, analytics }
