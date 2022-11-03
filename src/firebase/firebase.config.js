// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDMVy5lQ9DC-PpMAr0R71JEeHMxcgVVUQw",
    authDomain: "autocar-afa2e.firebaseapp.com",
    projectId: "autocar-afa2e",
    storageBucket: "autocar-afa2e.appspot.com",
    messagingSenderId: "303625341399",
    appId: "1:303625341399:web:f89e264af38e5f964ca392"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app