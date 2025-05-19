// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9p3NS3RJed2x93wHhb5o1h83oxjelfjo",
  authDomain: "coffee-store-app-79f40.firebaseapp.com",
  projectId: "coffee-store-app-79f40",
  storageBucket: "coffee-store-app-79f40.firebasestorage.app",
  messagingSenderId: "131672848767",
  appId: "1:131672848767:web:c20cfd1a4a9ccf233f424a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);