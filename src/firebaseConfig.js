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
  apiKey: "AIzaSyDLaDQ5TXFYum-nVbsSmY70SUyGh-jx7CQ",
  authDomain: "smart-evaluation-61462.firebaseapp.com",
  projectId: "smart-evaluation-61462",
  storageBucket: "smart-evaluation-61462.appspot.com",
  messagingSenderId: "568783115854",
  appId: "1:568783115854:web:4289cc04bde57c31d7151f",
  measurementId: "G-RFKDJ64HBX",
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const storage = getStorage(app);
// const analytics = getAnalytics(app);
