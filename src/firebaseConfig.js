// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADV7pJYmexjQmFgV3pb3L21IC1gjJA1mM",
  authDomain: "pig-project-ea5ab.firebaseapp.com",
  databaseURL: "https://pig-project-ea5ab-default-rtdb.firebaseio.com",
  projectId: "pig-project-ea5ab",
  storageBucket: "pig-project-ea5ab.appspot.com",
  messagingSenderId: "290135366099",
  appId: "1:290135366099:web:58c33137503311d0477726",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const storage = getStorage(app);
