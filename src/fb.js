// firebase.js
import { initializeApp } from 'firebase/app'
import { getFirestore, doc, setDoc } from 'firebase/firestore'
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { getAnalytics } from 'firebase/analytics'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHm3zZ6htACGQVNEvdlBBOPdQ4lTTl50s",
  authDomain: "gobuild-5bd27.firebaseapp.com",
  projectId: "gobuild-5bd27",
  storageBucket: "gobuild-5bd27.firebasestorage.app",
  messagingSenderId: "88198524832",
  appId: "1:88198524832:web:db6cb73da4d005a0d53ec5",
  measurementId: "G-9NCGSR0WRW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const analytics = getAnalytics(app)
const auth = getAuth()

export { db, doc, setDoc, auth, onAuthStateChanged, signInWithEmailAndPassword, analytics }
