// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2bIOda2F6_JkN089lmLWgcl3BrJmA9iA",
  authDomain: "smart-evaluation-583ab.firebaseapp.com",
  projectId: "smart-evaluation-583ab",
  storageBucket: "smart-evaluation-583ab.appspot.com",
  messagingSenderId: "1023639367625",
  appId: "1:1023639367625:web:8af836d036547456638218",
  measurementId: "G-G3YX4SW9PM",
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const storage = getStorage(app);
// const analytics = getAnalytics(app);
