// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcGqH6dBaexBYfeJSX0QJSRMeBURrI9Ao",
  authDomain: "my-shop-43040.firebaseapp.com",
  projectId: "my-shop-43040",
  storageBucket: "my-shop-43040.appspot.com",
  messagingSenderId: "892176289097",
  appId: "1:892176289097:web:39ffec86b45af936429e98",
  measurementId: "G-DQ6T3WHT4B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
