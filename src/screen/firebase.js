// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDFf8OQbIozu8bk3yMJkTVegOfS4v7S7Bk',
  authDomain: 'token-qbn.firebaseapp.com',
  projectId: 'token-qbn',
  storageBucket: 'token-qbn.appspot.com',
  messagingSenderId: '345815472293',
  appId: '1:345815472293:web:a0b20629b082143363554c',
  measurementId: 'G-07ZKLSX20R',
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
