import firebase from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyAkQq_FLYY0lqrORssaEykchI9i6EgbqS4",
  authDomain: "slack-clone-32e06.firebaseapp.com",
  projectId: "slack-clone-32e06",
  storageBucket: "slack-clone-32e06.appspot.com",
  messagingSenderId: "80880904546",
  appId: "1:80880904546:web:71c552105381d7538c243b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider}
export default db;
