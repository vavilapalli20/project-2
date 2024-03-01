// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWRdsWOTGUtYHBzT9Go088D0F1UwKgHic",
  authDomain: "netflix-gpt-675e4.firebaseapp.com",
  projectId: "netflix-gpt-675e4",
  storageBucket: "netflix-gpt-675e4.appspot.com",
  messagingSenderId: "127338274308",
  appId: "1:127338274308:web:42b7baf5f816b5a8205f51",
  measurementId: "G-DLJBM95BXH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();