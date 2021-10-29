import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js";

import { getAuth, signInWithEmailAndPassword, signInWithEmailLink} from 'https://www.gstatic.com/firebasejs/9.1.2/firebase-auth.js' ;

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries
 

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyA2LpaGU9MvBnq0vlU8WYQSA20G4t7sHDA",

  authDomain: "haas-building-density.firebaseapp.com",

  databaseURL: "https://haas-building-density.firebaseio.com",

  projectId: "haas-building-density",

  storageBucket: "haas-building-density.appspot.com",

  messagingSenderId: "524503288262",

  appId: "1:524503288262:web:fd095574b8c2a94e238ac7",

  measurementId: "G-KHC641W6VB"

};
 

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);



signInWithEmailAndPassword(auth, "ichia@berkeley.edu", "Megusta1!")
.then((userCredential) => {
  // Signed in 
  const user = userCredential.user;
  console.log(user.accessToken);
  getNames(user.accessToken)

  // ...
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
});


function getNames(accessToken) {
  fetch("https://firestore.googleapis.com/v1/projects/haas-building-density/databases/(default)/documents/buildings",
  {headers: {
    Authentication: "Bearer: " + accessToken
  }})
}