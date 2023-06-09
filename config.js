import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyBbWwM5rTA7BkqMsxrJ1xYHQKeWQMetNPM",
    authDomain: "pro-c71-1c53c.firebaseapp.com",
    projectId: "pro-c71-1c53c",
    storageBucket: "pro-c71-1c53c.appspot.com",
    messagingSenderId: "146774362798",
    appId: "1:146774362798:web:c96b6cee042d3a0dd8fb3f"
  }; 

//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
