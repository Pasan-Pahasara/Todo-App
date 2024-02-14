import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBLvtRWCIbX0--wydlvnckxySfmsIzwa8Y",
  authDomain: "test-af277.firebaseapp.com",
  databaseURL: "https://test-af277-default-rtdb.firebaseio.com",
  projectId: "test-af277",
  storageBucket: "test-af277.appspot.com",
  messagingSenderId: "641697319957",
  appId: "1:641697319957:web:0675c3f0a3b24c41de521c",
  measurementId: "G-7205SZ3BJF",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
