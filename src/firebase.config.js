import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJ6Kg6GC61KaQajX4Akesq2TDq2di0ayM",
  authDomain: "property-listing-4d952.firebaseapp.com",
  projectId: "property-listing-4d952",
  storageBucket: "property-listing-4d952.appspot.com",
  messagingSenderId: "808627153723",
  appId: "1:808627153723:web:2796b811587aa2d1c4651e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
