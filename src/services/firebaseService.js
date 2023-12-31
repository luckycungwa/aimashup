// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAj7drd3CjVdpIpwrPxb7HJkqiiNpGstrs",
  authDomain: "yesproject-6055e.firebaseapp.com",
  projectId: "yesproject-6055e",
  storageBucket: "yesproject-6055e.appspot.com",
  messagingSenderId: "469621518367",
  appId: "1:469621518367:web:54e3084a469ec57e03252a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase initialization - Ensure that 'app' is properly initialized
const storage = getStorage(app);
const db = getFirestore(app);

export { app, db, storage };
