// firebase-config.js

const firebaseConfig = {
  apiKey: "AIzaSyCfNT9xhLMWprAqLw5iYgHfmyXxnepsD94",
  authDomain: "aces-website-32aed.firebaseapp.com",
  projectId: "aces-website-32aed",
  storageBucket: "aces-website-32aed.appspot.com",  // ✅ Fixed here
  messagingSenderId: "233570480922",
  appId: "1:233570480922:web:39f8a65ba1d9d4c33a32a3",
  measurementId: "G-PY9FBGK0YR"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Export global references (optional if used inline)
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
