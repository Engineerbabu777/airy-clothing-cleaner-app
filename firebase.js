import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  // SECRET😁😁😁!!
}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

const db = getFirestore()

// EXPORTING!
export { auth, db }
