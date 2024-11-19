import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBRMvKrNOtE7Tjve7c-e_prd-yF_5SV5vw",
  authDomain: "netflix-6d150.firebaseapp.com",
  projectId: "netflix-6d150",
  storageBucket: "netflix-6d150.appspot.com",
  messagingSenderId: "750836281098",
  appId: "1:750836281098:web:511664ec8f01ecfc9294f3",
  measurementId: "G-KM2VJ1R4KX",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
