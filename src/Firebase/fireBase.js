import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBG86h3I9HgTPHYvjDzXYNdfOGesWxa8Es",
  authDomain: "reboot-cs.firebaseapp.com",
  projectId: "reboot-cs",
  storageBucket: "reboot-cs.appspot.com",
  messagingSenderId: "608823816161",
  appId: "1:608823816161:web:54c04588bcd4cc5cde2ca0",
//   measurementId: "${config.measurementId}"
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig); 

export default function getFirestore(){

  return firebase.firestore(app)
};