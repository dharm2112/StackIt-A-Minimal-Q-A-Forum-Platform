import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2eOoG6Z1nZRYDGkiqsg3FcoX6J53NsDU",
  authDomain: "stackit-69732.firebaseapp.com",
  projectId: "stackit-69732",
  storageBucket: "stackit-69732.appspot.com",
  messagingSenderId: "925084865861",
  appId: "1:925084865861:web:72805417cf7bff9e23da2c",
  measurementId: "G-0VRFTPRFMH"
};

// Initialize Firebase only if not already initialized
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize Firebase Authentication and export it
export const auth = getAuth(app);

// Initialize Firestore and export it
export const db = getFirestore(app);
