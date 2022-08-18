import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA0B_-bbhZYYcgJXL1_jod7FF2kyWXw7oI",
  authDomain: "clone-5fb0f.firebaseapp.com",
  projectId: "clone-5fb0f",
  storageBucket: "clone-5fb0f.appspot.com",
  messagingSenderId: "266517010517",
  appId: "1:266517010517:web:996703b6cd9dcc01679cdc",
  measurementId: "G-NPZV6FD9D3",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();

export { db, auth };
