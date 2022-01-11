import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUEftkUFFWmc-lMbYhV6MRNm0nEdBEhoc",
  authDomain: "photo-tagging-app-b0219.firebaseapp.com",
  projectId: "photo-tagging-app-b0219",
  storageBucket: "photo-tagging-app-b0219.appspot.com",
  messagingSenderId: "1038769138754",
  appId: "1:1038769138754:web:598592cf1ce06493cc11db",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

/*const addNewEntry = async () => {
  try {
    await addDoc(collection(db, "Leaderboard"), {
      startTime: 0,
    });
  } catch (error) {
    console.log("Failed to add database entry: ", error);
  }
};*/
