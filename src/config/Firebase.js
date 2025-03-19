// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbfIUYHuy9MpDVfZLeAIGnHBXNJHEkARs",
  authDomain: "contacts-app-firebase-53d85.firebaseapp.com",
  projectId: "contacts-app-firebase-53d85",
  storageBucket: "contacts-app-firebase-53d85.firebasestorage.app",
  messagingSenderId: "791720486821",
  appId: "1:791720486821:web:5eb0d8a2fafd284ff16a4c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);