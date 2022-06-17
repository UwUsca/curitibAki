import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB-O0jkPTE-ylx37fjSoiNJh8JqpUyV9r8",
  authDomain: "projetoec-authedb.firebaseapp.com",
  projectId: "projetoec-authedb",
  storageBucket: "projetoec-authedb.appspot.com",
  messagingSenderId: "103763017263",
  appId: "1:103763017263:web:1042a7210fb3fbad4dd0da",
  measurementId: "G-5GCEMRPBK7"
};

export const app = initializeApp(firebaseConfig);

