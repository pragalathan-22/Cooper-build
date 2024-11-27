// Firebase/FirebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyCWxZ7YzkiUW40MoHCk3b5kdcfhOhI1jAw",
  authDomain: "saloon-app-36f76.firebaseapp.com",
  projectId: "saloon-app-36f76",
  storageBucket: "saloon-app-36f76.appspot.com",
  messagingSenderId: "2559723464",
  appId: "1:2559723464:web:d0f8e301ef9f6e4b4462fd",
  measurementId: "G-CGXTNX4YL5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Auth and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
