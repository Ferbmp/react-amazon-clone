// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyDMOdmjIiW2QQqQ7thQeRmPVAVmJ4Zwzvk',
  authDomain: 'clone-b1aad.firebaseapp.com',
  projectId: 'clone-b1aad',
  storageBucket: 'clone-b1aad.appspot.com',
  messagingSenderId: '541819404390',
  appId: '1:541819404390:web:c70962bf205848efc9eda7',
  measurementId: 'G-2E561363SM',
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
