// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBhEl8tabHjyxCZuRoWMWqwBIzZvTEs4YI",
  authDomain: "faiz-marketing.firebaseapp.com",
  projectId: "faiz-marketing",
  storageBucket: "faiz-marketing.appspot.com",
  messagingSenderId: "854728084943",
  appId: "1:854728084943:web:6c955b4bd1ea84aba956ba",
  measurementId: "G-DSQW30RC1N"
};


const app = initializeApp(firebaseConfig);


const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }