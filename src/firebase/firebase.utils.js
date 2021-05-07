import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAQjepi7pymO6s-ij5KTPoaercXIBtjnn8",
  authDomain: "crown-clothing-473cb.firebaseapp.com",
  projectId: "crown-clothing-473cb",
  storageBucket: "crown-clothing-473cb.appspot.com",
  messagingSenderId: "206009645077",
  appId: "1:206009645077:web:1ef61343a9415020d3761c",
  measurementId: "G-G55T0KGNVK",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
