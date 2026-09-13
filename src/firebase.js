// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDH2D37MIn4p09KEIzONhWqM3Yc6w4nnlY",
  authDomain: "first-project-5494f.firebaseapp.com",
  projectId: "first-project-5494f",
  storageBucket: "first-project-5494f.firebasestorage.app",
  messagingSenderId: "164894313663",
  appId: "1:164894313663:web:8ef9e87db2c0fb33b3ca0a",
  measurementId: "G-3D8XG732Y6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Authentication
export const auth = getAuth(app);

export default app;