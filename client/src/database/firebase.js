import { initializeApp} from 'firebase/app'
import { browserLocalPersistence, getAuth} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebase = {
  apiKey: "AIzaSyBQrmup8KRcDEtsnuHt4kCU7nmnn9zNWKI",
  authDomain: "druyna-6262b.firebaseapp.com",
  projectId: "druyna-6262b",
  storageBucket: "druyna-6262b.appspot.com",
  messagingSenderId: "930725091484",
  appId: "1:930725091484:web:e38d42dff90cf8de0af559",
  measurementId: "G-G3LZRPHNPZ"
}

const app = initializeApp(firebase)

const auth = getAuth(app, { persistence: browserLocalPersistence })

const databaseApp = getFirestore(app)
export {
  auth,
  app,
  databaseApp
}