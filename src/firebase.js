import { initializeApp } from "firebase/app"
import 'firebase/auth'

 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAjc8N01rkgBLLvEpsA5KQWNePr3L9kmV4",
    authDomain: "lenos-y-carbon.firebaseapp.com",
    projectId: "lenos-y-carbon",
    storageBucket: "lenos-y-carbon.appspot.com",
    messagingSenderId: "401978746003",
    appId: "1:401978746003:web:6d324a21dd62ae82af5966",
    measurementId: "G-VWGG1B7TQ9"
  };

  const firebaseApp = initializeApp(firebaseConfig);

//   const auth = getAuth();
// createUserWithEmailAndPassword(auth)
//   .then((userCredential) => {
//     // Iniciado sesión
//     const user = userCredential.user;

      
 
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
   
//   });