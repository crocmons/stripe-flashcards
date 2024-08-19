// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHloUwEaLn6SdHPo-ltBmpJARp4YZF9r4",
  authDomain: "flashcard-saas-8d822.firebaseapp.com",
  projectId: "flashcard-saas-8d822",
  storageBucket: "flashcard-saas-8d822.appspot.com",
  messagingSenderId: "803939544196",
  appId: "1:803939544196:web:e410af0284eaadd03366d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;