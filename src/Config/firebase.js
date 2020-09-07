import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCQYtK317GafI3ZtklqSnfu3Tn1CCXjOaY",
  authDomain: "productos-22623.firebaseapp.com",
  databaseURL: "https://productos-22623.firebaseio.com",
  projectId: "productos-22623",
  storageBucket: "productos-22623.appspot.com",
  messagingSenderId: "17639119791",
  appId: "1:17639119791:web:b83938b7f2a415612bed5a"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
db.settings({
    timestampsInSnapshots: true
})
firebase.db = db;
firebase.auth = firebase.auth()
export default firebase;