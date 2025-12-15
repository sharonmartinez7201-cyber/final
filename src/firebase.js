// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1qvTge-XIxy92HFOehTPSKg8sjEpK1qQ",
  authDomain: "proyecto3-7e5b8.firebaseapp.com",
  projectId: "proyecto3-7e5b8",
  storageBucket: "proyecto3-7e5b8.firebasestorage.app",
  messagingSenderId: "924950787426",
  appId: "1:924950787426:web:92eaf812351e0639bc283b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db   = getFirestore(app);
export const auth = getAuth(app);
