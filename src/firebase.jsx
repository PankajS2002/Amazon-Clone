import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/messaging';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCYvYgYZgq6ioiuomXE9KtcdoYHuO9Yo8o",
    authDomain: "ecommerce-ga.firebaseapp.com",
    projectId: "ecommerce-ga",
    storageBucket: "ecommerce-ga.appspot.com",
    messagingSenderId: "1084036395593",
    appId: "1:1084036395593:web:265068e26cd49afafdc598",
    measurementId: "G-NQV75SBV7Y"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export{db , auth};