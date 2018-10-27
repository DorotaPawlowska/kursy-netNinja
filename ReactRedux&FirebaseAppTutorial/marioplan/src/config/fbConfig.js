import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyA1WqRhtvtHti4obkdn0JggE1zxuKmShVk",
  authDomain: "nn-marioplan.firebaseapp.com",
  databaseURL: "https://nn-marioplan.firebaseio.com",
  projectId: "nn-marioplan",
  storageBucket: "nn-marioplan.appspot.com",
  messagingSenderId: "80142120845"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true});

export default firebase;