import './app.css'
import App from './App.svelte'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDL7GaEyFID0ORDr5lNOWblDju9MtLB44o",
  authDomain: "tekton-platform.firebaseapp.com",
  projectId: "tekton-platform",
  storageBucket: "tekton-platform.appspot.com",
  messagingSenderId: "728714779796",
  appId: "1:728714779796:web:4ab2c5b12b2a22dc2de881",
  measurementId: "G-V712GS34QB"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase);

const app = new App({
  target: document.getElementById('app'),
})

export default app
