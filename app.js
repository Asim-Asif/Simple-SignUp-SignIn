import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
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

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const getsBtn = document.getElementById('sbtn');
const getlBtn = document.getElementById('lbtn');

if (getsBtn) {
    getsBtn.addEventListener('click', () => {
        const email = document.getElementById('semail');
        const password = document.getElementById('spassword');

        createUserWithEmailAndPassword(auth, email.value, password.value)
            .then((userCredential) => {
                const user = userCredential.user;
                alert(user.email + ' is signed up');
            })
            .catch((error) => {
                alert(error.message + ' Please try again');
            });
    });
}

if (getlBtn) {
    getlBtn.addEventListener('click', () => {
        const email = document.getElementById('lemail');
        const password = document.getElementById('lpassword');

        signInWithEmailAndPassword(auth, email.value, password.value)
            .then((userCredential) => {
                const user = userCredential.user;
                alert(user.email + ' is logged in');
            })
            .catch((error) => {
                alert(error.message + ' Please try again');
            });
    });
};
