import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var config = {
  apiKey: "AIzaSyAUMtRjxRXJXBEPZ_8IhAKz5csW0F0xQFc",
  authDomain: "workoutbuddy-a491d.firebaseapp.com",
  databaseURL: "https://workoutbuddy-a491d.firebaseio.com",
  projectId: "workoutbuddy-a491d",
  storageBucket: "workoutbuddy-a491d.appspot.com",
  messagingSenderId: "786290502823"
};

!firebase.apps.length ? firebase.initializeApp(config) : "";

const firestore = firebase.firestore();
const settings = {
  timestampsInSnapshots: true
};
firestore.settings(settings);

export const db = firebase.firestore;
export const auth = firebase.auth();
//export const auth = firebase.app.auth;
