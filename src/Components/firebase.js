import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7_qwf5wgzO7l7vX2Sqv-CzE8mpidNi1c",
  authDomain: "niktanportfolio.firebaseapp.com",
  databaseURL: "https://niktanportfolio-default-rtdb.firebaseio.com",
  projectId: "niktanportfolio",
  storageBucket: "niktanportfolio.appspot.com",
  messagingSenderId: "833333821531",
  appId: "1:833333821531:web:2146341a0e13cc335dbf7e",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
