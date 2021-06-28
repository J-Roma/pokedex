import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC5SUqQxT2PNa_R7Cd4QBN_SXJNPuhBgpY",
    authDomain: "sql-demo-6a3c7.firebaseapp.com",
    projectId: "sql-demo-6a3c7",
    storageBucket: "sql-demo-6a3c7.appspot.com",
    messagingSenderId: "314543388447",
    appId: "1:314543388447:web:49928b2dc77d4edb67622a",
    measurementId: "G-MJTV3CNRNP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export { db, googleAuthProvider, facebookAuthProvider, firebase };