import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBz8vrWvCsoR5kPJg8O1RFhoNZcC87Uu2U",
  authDomain: "proyecto-final-b79ff.firebaseapp.com",
  projectId: "proyecto-final-b79ff",
  storageBucket: "proyecto-final-b79ff.appspot.com",
  messagingSenderId: "456567652823",
  appId: "1:456567652823:web:37b3c0e06befeb92074b92",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
