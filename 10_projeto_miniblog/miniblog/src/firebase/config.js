import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDtcEaMXbj2MI44C7NOoHwvKIpziGIZyVE",
  authDomain: "miniblog-react-udemy.firebaseapp.com",
  projectId: "miniblog-react-udemy",
  storageBucket: "miniblog-react-udemy.appspot.com",
  messagingSenderId: "604163604889",
  appId: "1:604163604889:web:53c1ff66d440b690015308"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };