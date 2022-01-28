// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA56qKZ1QewtCN_kf6RdKmjS_h92zP41q4",
  authDomain: "fir-todos-ce103.firebaseapp.com",
  projectId: "fir-todos-ce103",
  storageBucket: "fir-todos-ce103.appspot.com",
  messagingSenderId: "985253751018",
  appId: "1:985253751018:web:1ec676ef44218668d14f93",
  measurementId: "G-Y7FX1HB7WF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestoreDb = getFirestore(app);

export default firestoreDb;