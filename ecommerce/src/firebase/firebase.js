// Import the functions you need from the SDKs you need 
import { initializeApp } from "firebase/app"; 
import {getAuth} from "firebase/auth" 
import {getFirestore} from "firebase/firestore" 
import {getStorage  } from "firebase/storage" 
// TODO: Add SDKs for Firebase products that you want to use 
// https://firebase.google.com/docs/web/setup#available-libraries 
 
// Your web app's Firebase configuration 
const firebaseConfig = { 
  apiKey: "AIzaSyBNHdIH-xSKokDwn0fkLcxhWN8ZVfjNH_Q",
  authDomain: "dodo-form.firebaseapp.com",
  projectId: "dodo-form",
  storageBucket: "dodo-form.appspot.com",
  messagingSenderId: "452464269456",
  appId: "1:452464269456:web:9cdf28c62a246785682015"
}; 
 
// Initialize Firebase 
const app = initializeApp(firebaseConfig); 
 export const auth = getAuth(app) 
export const db = getFirestore(app) 
export const imagedb = getStorage(app) 
 export default app