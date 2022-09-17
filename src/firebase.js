// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyANaVRo3gRZvHL9ip6G7haRJImCGS5h6Ck',
    authDomain: 'netflix-443ac.firebaseapp.com',
    projectId: 'netflix-443ac',
    storageBucket: 'netflix-443ac.appspot.com',
    messagingSenderId: '261045013594',
    appId: '1:261045013594:web:076b5483733a0774a99c63'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);