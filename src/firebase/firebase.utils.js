import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA6jArZ5T8A8-kbb6Rn-XPby7nyYJW8AhE",
    authDomain: "ecommerce-db-d5fad.firebaseapp.com",
    databaseURL: "https://ecommerce-db-d5fad.firebaseio.com",
    projectId: "ecommerce-db-d5fad",
    storageBucket: "ecommerce-db-d5fad.appspot.com",
    messagingSenderId: "371883361854",
    appId: "1:371883361854:web:fa2cd54fecd272f815b36f",
    measurementId: "G-NHRP1CY8GD"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firebase = firebase();

  //setting up google authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const SignInWithGoogle = () => auth.SignInWithPopup(provider);

export default firebase;