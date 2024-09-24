import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth, onAuthStateChanged, updatePassword ,updateProfile } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { getDatabase, ref, push, get, update } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-storage.js";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {

  apiKey: "AIzaSyB1ukq-2QYRRfU4_UskNAAdivWSXKqZbWQ",

  authDomain: "sfaret-login.firebaseapp.com",

  projectId: "sfaret-login",

  storageBucket: "sfaret-login.appspot.com",

  messagingSenderId: "974930877645",

  appId: "1:974930877645:web:2825e46a524f2015a19d84",
  
  measurementId: "G-0NN946WPVF"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app);

const user = auth.currentUser;

// Function to update the user profile
function updateUserProfile(user) {
  const userName = user.displayName;
  const userEmail = user.email;
  const userProfilePicture = user.photoURL;

  // Update the profile section with user data
  document.getElementById("userName").textContent = userName;
  document.getElementById("userEmail").textContent = userEmail;
  document.getElementById("userProfilePicture").src = userProfilePicture;
}

// Add the onAuthStateChanged listener
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, call the updateUserProfile function
    updateUserProfile(user);

    const uid = user.uid;
    return uid;

  } else {
    // User is not signed in, redirect to the registration page
    alert("Create Account & login");
    window.location.href = "/register.html";
  }
});



