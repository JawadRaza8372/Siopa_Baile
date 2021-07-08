import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import "firebase/storage"
var firebaseConfig = {
  apiKey: "AIzaSyBgUSapQxPvdWGPwjy1lyOAaD8vAElj9Mc",
  authDomain: "ecomerace-siopa-baile.firebaseapp.com",
  projectId: "ecomerace-siopa-baile",
  storageBucket: "ecomerace-siopa-baile.appspot.com",
  messagingSenderId: "319416851499",
  appId: "1:319416851499:web:abccd8399c6a87fd5f1e6e"
}
const FirebaseApp= firebase.initializeApp(firebaseConfig);
const db=FirebaseApp.firestore();
const auth=firebase.auth();
const storage=firebase.storage();
export {db,auth,storage};
