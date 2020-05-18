import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
const app = firebase.initializeApp({
  apiKey: "AIzaSyA1YTlxmFYPojZdpNQABEOHEDxoPY1n85Q",
  authDomain: "quizz-e1045.firebaseapp.com",
  databaseURL: "https://quizz-e1045.firebaseio.com",
  projectId: "quizz-e1045",
  storageBucket: "quizz-e1045.appspot.com",
  messagingSenderId: "209492098946",
  appId: "1:209492098946:web:9ed9a13fe252858bbe599b",
  measurementId: "G-L7C6EFYB32",
});

export default app;
