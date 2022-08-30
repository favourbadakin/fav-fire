import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD5h4Booa6srswYio8yKhwzZDJRMP8yZpk",
    authDomain: "react-firebase-basic-3feb4.firebaseapp.com",
    projectId: "react-firebase-basic-3feb4",
    storageBucket: "react-firebase-basic-3feb4.appspot.com",
    messagingSenderId: "879095133394",
    appId: "1:879095133394:web:dc476267416af719b2e90b",
    measurementId: "G-C2LXZ9G3NF"
  };

  const app = initializeApp(firebaseConfig);

  //init firestore
  export const db =  getFirestore(app)