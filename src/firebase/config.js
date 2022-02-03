import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC8BEExdKLT2KsRP0A5b6dKL24m3uo2dwI",
    authDomain: "hi-animal-classification.firebaseapp.com",
    projectId: "hi-animal-classification",
    storageBucket: "hi-animal-classification.appspot.com",
    messagingSenderId: "912642034631",
    appId: "1:912642034631:web:9b95b9305c35023f1a27e2"
  };

//initialize firebase
firebase.initializeApp(firebaseConfig);

//initialize services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

//timestamp
const timestamp = firebase.firestore.Timestamp;

export {projectFirestore, projectAuth, timestamp};