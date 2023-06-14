import firebase from "firebase/app"
// import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvo6VlJc7CeBSf53GsM3eoaXrdbqRyBL8",
  authDomain: "fantano-core-adbcc.firebaseapp.com",
  projectId: "fantano-core-adbcc",
  storageBucket: "fantano-core-adbcc.appspot.com",
  messagingSenderId: "498771730177",
  appId: "1:498771730177:web:f5dc886825657b01bdc500",
  measurementId: "G-45HTL1M9SX"
};

firebase.initializeApp(firebaseConfig)

// const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()

db.enablePersistence().catch((error) => {
  console.log(`Firebase persistence error ${error.code}`)
})

const textCollection = db.collection('texts')

export default {
  db,
  storage,
  textCollection,
}