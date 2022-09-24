// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD5Kh8HSXvN4j1S4dnEkqjM3GSxjgenocU",
    authDomain: "todolist11-410b6.firebaseapp.com",
    projectId: "todolist11-410b6",
    storageBucket: "todolist11-410b6.appspot.com",
    messagingSenderId: "948834345704",
    appId: "1:948834345704:web:eda0e674e15b6fc7815f5d",
    measurementId: "G-TBBLN1YS35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = app.firestore();
export { db };