import firebase from "firebase";
import "firebase/auth";
import "firebase/app";

var firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  //   databaseURL: process.env.REACT_APP_BASEURL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.auth();
export default {
  firebaseConfig,
};

// ===========================================================================
// var firebaseConfig = {
//     apiKey: "AIzaSyB4WEwEWL_rWVbB-S8f1T5xq-Rp9JNOT7A",
//     authDomain: "temp-firebase-test-466fd.firebaseapp.com",
//     projectId: "temp-firebase-test-466fd",
//     storageBucket: "temp-firebase-test-466fd.appspot.com",
//     messagingSenderId: "152390375536",
//     appId: "1:152390375536:web:618e831753f124aa087cb5",
//     measurementId: "G-T29YSYQ8V5",
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
