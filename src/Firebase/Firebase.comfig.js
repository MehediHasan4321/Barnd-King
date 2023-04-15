// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDswbcE5xxXbTzeJUsrTNFU0GEPeNfad7g",
  authDomain: "fashion-hut-ccd06.firebaseapp.com",
  projectId: "fashion-hut-ccd06",
  storageBucket: "fashion-hut-ccd06.appspot.com",
  messagingSenderId: "677220009383",
  appId: "1:677220009383:web:28252af60c2fc12e75a282"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app