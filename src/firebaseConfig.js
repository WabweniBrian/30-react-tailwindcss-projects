import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDxUE3Oc5818ytM1xeEYz7tpbYyastl-8g",
  authDomain: "gallery-cbaf2.firebaseapp.com",
  projectId: "gallery-cbaf2",
  storageBucket: "gallery-cbaf2.appspot.com",
  messagingSenderId: "748388955757",
  appId: "1:748388955757:web:05953c183aa14e31ad3164",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
