// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBC8SlytI_rrI7kX9GfCkKZFWQbUXaJ-10",
  authDomain: "netflix-clone-85468.firebaseapp.com",
  projectId: "netflix-clone-85468",
  storageBucket: "netflix-clone-85468.appspot.com",
  messagingSenderId: "617922962001",
  appId: "1:617922962001:web:71b06fa7c44aedec41ce70",
  measurementId: "G-CE2CJP0L7K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// const analyti cs = getAnalytics(app); 

export {auth};
export default db ;