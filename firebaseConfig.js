import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAVEQNGWdYrUZsRjzyNUInPGnb3w8mMe6M",
  authDomain: "typingspeed-project.firebaseapp.com",
  projectId: "typingspeed-project",
  storageBucket: "typingspeed-project.appspot.com",
  messagingSenderId: "304084938158",
  appId: "1:304084938158:web:cbcb2ab601181f7555ec3f",
  measurementId: "G-2DFHL7937X"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseApp.firestore();

export { auth, db };
