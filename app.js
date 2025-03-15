import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  signInWithRedirect,
  getRedirectResult
} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBEL4tiiJjH8dWQGtXSFLNYcck-DzIBUoc",
  authDomain: "sign-up-sign-in-1.firebaseapp.com",
  projectId: "sign-up-sign-in-1",
  storageBucket: "sign-up-sign-in-1.firebasestorage.app",
  messagingSenderId: "594873014694",
  appId: "1:594873014694:web:cfd312af3b0163f8889767",
  measurementId: "G-5D7L90T972"
};

document.addEventListener("DOMContentLoaded", () => {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();


  const getsBtn = document.getElementById('sbtn');
  const getlBtn = document.getElementById('lbtn');
  const gBtn = document.getElementById('gbtn');

  if (getsBtn) {
    getsBtn.addEventListener('click', () => {
      const email = document.getElementById('semail').value;
      const password = document.getElementById('spassword').value;

      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          alert(user.email + ' is signed up');
        })
        .catch((error) => {
          alert(error.message + ' Please try again');
        });
    });
  }

  // Sign-In Button
  if (getlBtn) {
    getlBtn.addEventListener('click', () => {
      const email = document.getElementById('lemail').value;
      const password = document.getElementById('lpassword').value;

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          alert(user.email + ' is logged in');
        })
        .catch((error) => {
          alert(error.message + ' Please try again');
        });
    });
  }

  if (gBtn) {
    gBtn.addEventListener('click', () => {
      signInWithPopup(auth, provider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const user = result.user;
          alert(user.email + ' signed in with Google');
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert("Error (" + errorCode + "): " + errorMessage);
        });
    });
    }}
    );

    
    
