import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyD2Vli5OpzuyAlrEEdpvPWQygYGYAiKFBw',
  authDomain: 'clone-992c7.firebaseapp.com',
  databaseURL: 'https://clone-992c7.firebaseio.com',
  projectId: 'clone-992c7',
  storageBucket: 'clone-992c7.appspot.com',
  messagingSenderId: '602527766390',
  appId: '1:602527766390:web:03b4938895c44bb697cc57',
  measurementId: 'G-3963LD2H09',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
