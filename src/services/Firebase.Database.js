// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC41PKlfRJMLCY36lu3guEO5BaZOCl4wbY",
  authDomain: "fir-hosting-4da18.firebaseapp.com",
  projectId: "fir-hosting-4da18",
  storageBucket: "fir-hosting-4da18.appspot.com",
  messagingSenderId: "635866523983",
  appId: "1:635866523983:web:f833341399e3f827a13d3a",
  measurementId: "G-J1HCFW3299"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestoreDb = getFirestore(app);

export default firestoreDb;