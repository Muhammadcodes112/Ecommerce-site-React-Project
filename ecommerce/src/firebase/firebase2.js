// for the firebase.jsx:
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBNHdIH-xSKokDwn0fkLcxhWN8ZVfjNH_Q",
  authDomain: "dodo-form.firebaseapp.com",
  projectId: "dodo-form",
  storageBucket: "dodo-form.appspot.com",
  messagingSenderId: "452464269456",
  appId: "1:452464269456:web:9cdf28c62a246785682015"
};

// Initialize Firebase App
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(firebaseApp);

export { db };