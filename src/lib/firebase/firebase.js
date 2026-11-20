import { initializeApp, getApps, getApp } from 'firebase/app';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmwWID_Vq6bwEtglkb2froS0jMrNswIZc",
  authDomain: "sutairu-ae32b.firebaseapp.com",
  projectId: "sutairu-ae32b",
  storageBucket: "sutairu-ae32b.firebasestorage.app",
  messagingSenderId: "570270882006",
  appId: "1:570270882006:web:31b800b117a1b5b5aa9177",
  measurementId: "G-T3QEYF83JC"
};

export const app = getApps().length ? getApp() : initializeApp(firebaseConfig);