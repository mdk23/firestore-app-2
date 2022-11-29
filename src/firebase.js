 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
 
import {getFirestore} from 'firebase/firestore'
 import {getAuth,GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyChfx-1fxlcpeU4Rm5ANAFViyrhlJxRQw0",
  authDomain: "firestore-app-2-c4844.firebaseapp.com",
  projectId: "firestore-app-2-c4844",
  storageBucket: "firestore-app-2-c4844.appspot.com",
  messagingSenderId: "34084500750",
  appId: "1:34084500750:web:c03a1316406bfa8fd5135f",
  measurementId: "G-CE4RS34RGT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db=getFirestore(app);
const auth=getAuth(app)
const google_provider=new GoogleAuthProvider();
 

export {db,app,auth,google_provider}