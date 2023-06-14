import { initializeApp } from "firebase/app";
import { getAnalytics ,isSupported } from "firebase/analytics";
import firebase from "firebase/compat/app";
import "firebase/compat/database";

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

firebase.initializeApp(firebaseConfig);

console.log(initializeApp)



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = isSupported().then(yes => yes ? getAnalytics(app) : null);

const db = firebase.database();

export const FromDB = db.ref("myName")
//db.ref('myName').push('ㄟㄟ')

//刪除
const checkData = FromDB.child('-NXrWyQOXTQQ3NB2Cl_x');

checkData.once("value")
.then((snapshot) => {
    if(snapshot.exists()) {
        checkData.remove()
        .then(() => {
            console.log("刪除成功");
        })
        .catch((error) => {
            console.error("刪除失敗",error);
        });
    }
    else{
        console.log("無此資料");
    }
})
.catch((error) => {
    console.error("檢查資料發生錯誤",error);
})



