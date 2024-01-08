 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyDc9XWWmIuzuMnLZYbIkMXdPM3lKlClKo4",
   authDomain: "biologyforstudents-40b0b.firebaseapp.com",
   databaseURL: "https://biologyforstudents-40b0b-default-rtdb.europe-west1.firebasedatabase.app",
   projectId: "biologyforstudents-40b0b",
   storageBucket: "biologyforstudents-40b0b.appspot.com",
   messagingSenderId: "281936106687",
   appId: "1:281936106687:web:ded736f9d0fc66b0c0a20a",
   measurementId: "G-0XB5NKRHH8"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);