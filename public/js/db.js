
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-analytics.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDG6Fq3KG9pDP3rmdj6ExG4DVZWVWi5PIk",
  authDomain: "portfolio-guillevz.firebaseapp.com",
  databaseURL: "https://portfolio-guillevz-default-rtdb.firebaseio.com",
  projectId: "portfolio-guillevz",
  storageBucket: "portfolio-guillevz.appspot.com",
  messagingSenderId: "724567863955",
  appId: "1:724567863955:web:0fbcb16baee187506e9366",
  measurementId: "G-016N6EYS6Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);





// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
// import {getDatabase, set, ref} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCv3pceXNI7coikgf9EO8fJbzT1XxF9bQc",
//   authDomain: "datab-121b2.firebaseapp.com",
//   databaseURL: "https://datab-121b2-default-rtdb.firebaseio.com",
//   projectId: "datab-121b2",
//   storageBucket: "datab-121b2.appspot.com",
//   messagingSenderId: "702005092909",
//   appId: "1:702005092909:web:ef19f0e6b1be0306bccea4"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const database = getDatabase(app);


document.getElementById("contactForm").addEventListener(
  "submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  var name = getElementVal("name");
  var email = getElementVal("email");
  var subject = getElementVal("subject");
  var message = getElementVal("message");
  saveMessages(name, email, subject, message);

  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);
  document.getElementById("contactForm").reset();
}

function saveMessages(name, email, subject, message){
  set(ref(database,'Name'+": "+name),{
    name: name,
    email: email,
    subject: subject,
    message: message,
  })};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};