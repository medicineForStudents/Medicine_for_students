// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional ..
  const firebaseConfig = {
    apiKey: "AIzaSyBV709-3lZ44wZtN-Rf00txUDL3Er5yF_A",
    authDomain: "biologyforstudents-8327c.firebaseapp.com",
    projectId: "biologyforstudents-8327c",
    storageBucket: "biologyforstudents-8327c.appspot.com",
    messagingSenderId: "1032215452836",
    appId: "1:1032215452836:web:3b418d157384d832909a31",
    measurementId: "G-PYFJ7XTW6E"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);