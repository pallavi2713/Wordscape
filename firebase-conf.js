// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth , GoogleAuthProvider} from 'firebase/auth'
/// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSIFFMDwdsibjru3sr772CVeLZk7NbiW0",
  authDomain: "blog-db55e.firebaseapp.com",
  projectId: "blog-db55e",
  storageBucket: "blog-db55e.appspot.com",
  messagingSenderId: "982796237338",
  appId: "1:982796237338:web:9a032672f2394abb972fa3"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db  =  getFirestore(app);
export const auth  =  getAuth(app);
export const provider  = new GoogleAuthProvider();
