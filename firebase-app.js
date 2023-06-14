const firebaseConfig = {
  apiKey: "AIzaSyBG_fxYxDimkAyqoK2Sd7LrPVFKyJ0tZ40",
  authDomain: "todolist-f6f50.firebaseapp.com",
  databaseURL: "https://todolist-f6f50-default-rtdb.firebaseio.com",
  projectId: "todolist-f6f50",
  storageBucket: "todolist-f6f50.appspot.com",
  messagingSenderId: "775430018969",
  appId: "1:775430018969:web:30a28de9bde307b03fa508",
  measurementId: "G-2MJZD4GZ5P"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
let database = firebase.database() 