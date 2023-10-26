// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {collection, getFirestore} from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDL6AZYd0Z8F5mmfAGIRLM9fdu_Oak_d4o",
  authDomain: "react-notes-scrimba-e4489.firebaseapp.com",
  projectId: "react-notes-scrimba-e4489",
  storageBucket: "react-notes-scrimba-e4489.appspot.com",
  messagingSenderId: "181950193714",
  appId: "1:181950193714:web:1b1d3d3bdaf7dd312ddc2b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes")