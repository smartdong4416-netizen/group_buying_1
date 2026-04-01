import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
  getFirestore
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA7lj_evdSkierw1tg-8mz_-T8JNiAqoXA",
  authDomain: "groupbuying1-f5d3b.firebaseapp.com",
  projectId: "groupbuying1-f5d3b",
  storageBucket: "groupbuying1-f5d3b.firebasestorage.app",
  messagingSenderId: "488132342309",
  appId: "1:488132342309:web:8a719884572e4220ad85cc"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

/////////////////////////////////////////

