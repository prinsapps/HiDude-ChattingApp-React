import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB20DiNR2Mfh4jkbRs01p8qfCphtJVST7g",
    authDomain: "hi-dude-ef18f.firebaseapp.com",
    databaseURL: "https://hi-dude-ef18f.firebaseio.com",
    projectId: "hi-dude-ef18f",
    storageBucket: "hi-dude-ef18f.appspot.com",
    messagingSenderId: "187987778813",
    appId: "1:187987778813:web:e2edb25a1ca7d086bab294"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export {auth, provider};
  export default db;