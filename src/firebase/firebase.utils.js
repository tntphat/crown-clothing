import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCfAhhngg4VID20uyUdb-JzO-5ab90eHzg",
    authDomain: "crown-db-3f8db.firebaseapp.com",
    projectId: "crown-db-3f8db",
    storageBucket: "crown-db-3f8db.appspot.com",
    messagingSenderId: "587860791622",
    appId: "1:587860791622:web:0b4063c660444ae89f1547",
    measurementId: "G-CB37VBY32K"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;