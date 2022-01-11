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
  doc,
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

const addNewEntry = async () => {
  try {
    const docRef = await addDoc(collection(db, "Leaderboard"), {
      startTime: Timestamp.now(),
    });
    let id = docRef.id;
    return id;
  } catch (error) {
    console.log("Failed to add database entry: ", error);
  }
};

const addEndTime = async (id) => {
  try {
    await updateDoc(doc(db, "Leaderboard", id), {
      endTime: Timestamp.now(),
    });
  } catch (error) {
    console.log("Failed to update database", error);
  }
};

const addNameAndScore = async (id, name) => {
  const player = await (await getDoc(doc(db, "Leaderboard", id))).data();
  try {
    await updateDoc(doc(db, "Leaderboard", id), {
      name,
      score: player.endTime.seconds - player.startTime.seconds - 1,
    });
  } catch (error) {
    console.log("Failed to update database: ", error);
  }
};

const getLeaderboard = async () => {
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

export { getLeaderboard, addNewEntry, addNameAndScore, addEndTime };
