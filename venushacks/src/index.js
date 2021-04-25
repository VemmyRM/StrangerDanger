import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Form from "./Components/Form";
import reportWebVitals from "./reportWebVitals";
import firebase from "firebase/app";
import "./App.css";

var firebaseConfig = {
  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // databaseURL: process.env.REACT_APP_DATABASE_URL,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_ID,
  // measurementId: process.env.REACT_APP_MEASUREMENT_ID

  apiKey: "AIzaSyCDQpNTi8faf3lkaXkgVNn9K_eM3iP3oVQ",
  authDomain: "venushacks-2a4dc.firebaseapp.com",
  projectId: "venushacks-2a4dc",
  storageBucket: "venushacks-2a4dc.appspot.com",
  messagingSenderId: "413195790958",
  appId: "1:413195790958:web:284fb251f84b853f15547f",
  measurementId: "G-EEBL46T565",
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <Form />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
