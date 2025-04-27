import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD1enJ0So1md6zCGr3bvndaBurvRYlm5H8",
  authDomain: "loginsystem-aced0.firebaseapp.com",
  projectId: "loginsystem-aced0",
  storageBucket: "loginsystem-aced0.firebasestorage.app",
  messagingSenderId: "693702337579",
  appId: "1:693702337579:web:0f5178f923bb727e7bb66e",
  measurementId: "G-CRLLN862PT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auths = getAuth(app);