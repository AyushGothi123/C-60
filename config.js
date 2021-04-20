import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDspfoLF9qpSLTa9Gm94tYebz7BC4DoYAk",
  authDomain: "project-c-60.firebaseapp.com",
  databaseURL:'https://project-c-60-default-rtdb.firebaseio.com/',
  projectId: "project-c-60",
  storageBucket: "project-c-60.appspot.com",
  messagingSenderId: "409793539043",
  appId: "1:409793539043:web:cbb9f694a1470dc8800ed6"
  
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase.database();