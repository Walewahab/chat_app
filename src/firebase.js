// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuIh4XEbpQc8Ya2W-gBNgVTdsWVNvec_0",
  authDomain: "chat-appon.firebaseapp.com",
  projectId: "chat-appon",
  storageBucket: "chat-appon.appspot.com",
  messagingSenderId: "102682251584",
  appId: "1:102682251584:web:fcf18618e16997bc4c2aa5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);