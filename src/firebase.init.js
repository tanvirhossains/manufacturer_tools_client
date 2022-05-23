// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDs1Hbeg8E-C2vxIDQKt00ufM3rjLCiZss",
  authDomain: "construction-tools-a6832.firebaseapp.com",
  projectId: "construction-tools-a6832",
  storageBucket: "construction-tools-a6832.appspot.com",
  messagingSenderId: "764064567153",
  appId: "1:764064567153:web:ab6762ba60ab58b857b0d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;