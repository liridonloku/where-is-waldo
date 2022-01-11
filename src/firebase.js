import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  Timestamp,
  updateDoc,
  getDoc,
  orderBy,
  query,
} from "firebase/firestore";
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

export const addNewEntry = async () => {
  try {
    const docRef = await addDoc(collection(db, "Leaderboard"), {
      startTime: Timestamp.now(),
    });
    return docRef;
  } catch (error) {
    console.log("Failed to add database entry: ", error);
  }
};

export const addEndTime = async (docRef) => {
  try {
    await updateDoc(docRef, {
      endTime: Timestamp.now(),
    });
  } catch (error) {
    console.log("Failed to update database", error);
  }
};

export const addNameScore = async (docRef, name) => {
  const startTime = await (await getDoc(docRef)).data().startTime;
  const endTime = await (await getDoc(docRef)).data().endTime;
  try {
    await updateDoc(docRef, {
      name,
      score: endTime.seconds - startTime.seconds,
    });
  } catch (error) {
    console.log("Failed to update database: ", error);
  }
};

export const getLeaderboard = async () => {
  try {
    const leaderBoard = [];
    const querySnapshot = await getDocs(
      query(collection(db, "Leaderboard"), orderBy("score", "asc"))
    );
    querySnapshot.forEach((doc) => {
      leaderBoard.push(doc.data());
    });
    return leaderBoard;
  } catch (error) {
    console.log("Failed to load Leaderboard: ", error);
  }
};
