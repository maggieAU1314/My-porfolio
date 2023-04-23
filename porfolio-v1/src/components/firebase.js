// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore, collection } from "firebase/firestore";
// import { getAuth } from "firebase/auth";
// import { getStorage } from 'firebase/storage';
//import { signInWithEmail } from 'firebase/auth';
//ODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlxE4Dt-w-8qZd1zKkXon_1Ht9qpZprfE",
  authDomain: "jsdr10-portfolio.firebaseapp.com",
  projectId: "jsdr10-portfolio",
  storageBucket: "jsdr10-portfolio.appspot.com",
  messagingSenderId: "866919188003",
  appId: "1:866919188003:web:4c01853eb61be90c4bd396",
  measurementId: "G-1YDSXFE6LC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore(app);

export const storage = getStorage(app);
export const deRef = collection(db, "portfolio");

export const registerNewUser = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("Register");
      console.log(user);
      // ...
    })
    .catch((error) => {
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // ..
    });
};

export const signInWithEmail = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // ..
    });
};
