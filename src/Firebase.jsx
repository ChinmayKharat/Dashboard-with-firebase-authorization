import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDVKhzFuZek7dh82qzOBVqoT-77ReDUoMM",
  authDomain: "dashboard-2b30f.firebaseapp.com",
  projectId: "dashboard-2b30f",
  storageBucket: "dashboard-2b30f.appspot.com",
  messagingSenderId: "803751693594",
  appId: "1:803751693594:web:324df465c69400010d30a3",
  measurementId: "G-J0FQ84K452"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
