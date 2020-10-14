import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCY0wmVJGyhvQRW86l3lvM5d963pW_5G88",
  authDomain: "whatsapp08d.firebaseapp.com",
  databaseURL: "https://whatsapp08d.firebaseio.com",
  projectId: "whatsapp08d",
  storageBucket: "whatsapp08d.appspot.com",
  messagingSenderId: "538843892486",
  appId: "1:538843892486:web:3cd30dd482f0ee16672c87",
  measurementId: "G-G2M4DBSB2K",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default db;
export { auth, provider };
