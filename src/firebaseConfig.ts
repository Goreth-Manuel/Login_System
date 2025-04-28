// import { initializeApp } from "firebase/app";
// import { getAuth } from 'firebase/auth';

// const firebaseConfig = {
//   apiKey: "AIzaSyD1enJ0So1md6zCGr3bvndaBurvRYlm5H8",
//   authDomain: "loginsystem-aced0.firebaseapp.com",
//   projectId: "loginsystem-aced0",
//   storageBucket: "loginsystem-aced0.firebasestorage.app",
//   messagingSenderId: "693702337579",
//   appId: "1:693702337579:web:0f5178f923bb727e7bb66e",
//   measurementId: "G-CRLLN862PT"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auths = getAuth(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2AbXLevRgihlogTJnwsLJP_vs1aNbba8",
  authDomain: "sistema-de-login-a1067.firebaseapp.com",
  projectId: "sistema-de-login-a1067",
  storageBucket: "sistema-de-login-a1067.firebasestorage.app",
  messagingSenderId: "696460729619",
  appId: "1:696460729619:web:b478abbcf8d129a4218ee6",
  measurementId: "G-CC7823FT1B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);