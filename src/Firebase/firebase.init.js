// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgRfpEYy4mTSsGmVOkvqf2-0bAWphugNc",
  authDomain: "coffee-store-ffc5c.firebaseapp.com",
  projectId: "coffee-store-ffc5c",
  storageBucket: "coffee-store-ffc5c.firebasestorage.app",
  messagingSenderId: "141043975686",
  appId: "1:141043975686:web:5c1bfc9d3c505a90a0a587"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app