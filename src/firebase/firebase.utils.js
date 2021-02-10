import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyD5C4ElaII6kcwJOItYdUe3Nf9B3IRKfns",
  authDomain: "acnh-isle-comp.firebaseapp.com",
  projectId: "acnh-isle-comp",
  storageBucket: "acnh-isle-comp.appspot.com",
  messagingSenderId: "771122363672",
  appId: "1:771122363672:web:2a90acff977ebea8ae326d",
  measurementId: "G-9PCXZ9MWR6"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;