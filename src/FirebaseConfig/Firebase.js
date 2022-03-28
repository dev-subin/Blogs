import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC3-xmsB9XqrdoI9rTt4kfdXxuvtlatxcM",
  authDomain: "blogs-maker.firebaseapp.com",
  projectId: "blogs-maker",
  storageBucket: "blogs-maker.appspot.com",
  messagingSenderId: "626795611088",
  appId: "1:626795611088:web:37bda049a9020b6a7a6fd5",
  measurementId: "G-5Q9CLFHKQB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const db = firebaseApp.firestore();
const googleAuth = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
export { auth, db, googleAuth, storage };
