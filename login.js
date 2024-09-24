import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";

import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider ,signInWithPopup ,sendPasswordResetEmail} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

import { getAnalytics } from "firebase/analytics";
// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyB1ukq-2QYRRfU4_UskNAAdivWSXKqZbWQ",

  authDomain: "sfaret-login.firebaseapp.com",

  projectId: "sfaret-login",

  storageBucket: "sfaret-login.appspot.com",

  messagingSenderId: "974930877645",

  appId: "1:974930877645:web:2825e46a524f2015a19d84",
  
  measurementId: "G-0NN946WPVF"

};



const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth(app)
auth.useDeviceLanguage()

//grab
const login= document.getElementById("login");
login.addEventListener("click", function (event) {
 event.preventDefault()

 let email = document.getElementById("email").value;
 const password = document.getElementById("password").value;

 signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
   const user = userCredential.user;
   window.location.href = "dashboard.html";
  })
  .catch((error) => {
   const errorCode = error.code;
   const errorMessage = error.message;
 
alert(errorMessage)
  });

})



const google = document.getElementById("google");
google.addEventListener("click",
 function registerWithGoogle() {
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    window.location.href = "dashboard.html";


  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    
    
alert(errorMessage)

  });



 }
)

//reset password .

 const reset = document.getElementById("resetPassword")
 reset.addEventListener("click",function(){
  let email = document.getElementById("email").value;
  console.log(email)
if(email == "null"){
  alert("Please Enter Your email!!")
} else{

  sendPasswordResetEmail(auth, email)
  .then(() => {
    // Password reset email sent!
    alert("Password reset email sent!")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
  });
}



 })